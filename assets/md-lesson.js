// Builds a lesson page from lesson.md (same folder).
// Format: front matter (title, program, lesson, video, blurb), intro text,
// a ```brief block, then "## " sections that become open/close parts.
(function () {
  var root = document.getElementById('lesson');
  var base = document.currentScript.src.replace(/assets\/md-lesson\.js.*$/, '');

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function inline(s) {
    s = esc(s);
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<i>$2</i>');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, t, u) {
      var ext = /^https?:/.test(u);
      return '<a href="' + u + '"' + (ext ? ' target="_blank" rel="noreferrer"' : '') + '>' + t + '</a>';
    });
    return s;
  }
  function ytEmbed(u) {
    var m = u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/);
    var l = u.match(/list=([\w-]+)/);
    if (m) return 'https://www.youtube.com/embed/' + m[1];
    if (l) return 'https://www.youtube.com/embed/videoseries?list=' + l[1];
    return u;
  }

  function parseFront(text) {
    var meta = {}, body = text;
    var m = text.match(/^---\n([\s\S]*?)\n---\n?/);
    if (m) {
      m[1].split('\n').forEach(function (l) { var i = l.indexOf(':'); if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim(); });
      body = text.slice(m[0].length);
    }
    return { meta: meta, body: body };
  }

  function renderBrief(lines, partColours) {
    var html = '<div class="flow">', band = -1, open = false;
    lines.forEach(function (l) {
      l = l.trim(); if (!l) return;
      if (/^(Part|Bonus|Extra)\b/i.test(l)) {
        if (open) html += '</div></div><div class="down">↓</div>';
        band++; open = true;
        var c = partColours[band] || ('var(--p' + (band % 7 + 1) + ')');
        html += '<div class="band" style="--c:' + c + '"><h4><a href="#part' + (band + 1) + '">' + inline(l) + '</a></h4><div class="bubbles">';
      } else {
        var bits = l.split('|').map(function (s) { return s.trim(); });
        html += '<div class="bubble"><b>' + inline(bits[0]) + '</b>' + bits.slice(1).map(inline).join('<br>') + '</div>';
      }
    });
    if (open) html += '</div></div>';
    return html + '</div>';
  }

  function blocks(lines) {
    // Render a run of body lines (inside a part or the intro) to HTML.
    var out = '', i = 0, para = [];
    function flush() { if (para.length) { out += '<p>' + inline(para.join(' ')) + '</p>'; para = []; } }
    while (i < lines.length) {
      var l = lines[i];
      if (!l.trim()) { flush(); i++; continue; }
      if (/^```/.test(l)) {
        flush(); var code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(esc(lines[i])); i++; }
        out += '<pre><code>' + code.join('\n') + '</code></pre>'; i++; continue;
      }
      if (/^#### /.test(l)) { flush(); out += '<h4>' + inline(l.slice(5)) + '</h4>'; i++; continue; }
      if (/^### /.test(l)) { flush(); out += '<h3>' + inline(l.slice(4)) + '</h3>'; i++; continue; }
      if (/^\|/.test(l)) {
        flush(); var rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        out += '<table>';
        rows.forEach(function (r, ri) {
          if (/^\|\s*:?-{3,}/.test(r)) return;
          var cells = r.replace(/^\||\|\s*$/g, '').split('|');
          var tag = ri === 0 ? 'th' : 'td';
          out += '<tr>' + cells.map(function (c) { return '<' + tag + '>' + inline(c.trim()) + '</' + tag + '>'; }).join('') + '</tr>';
        });
        out += '</table>'; continue;
      }
      if (/^>/.test(l)) {
        flush(); var q = [];
        while (i < lines.length && /^>/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
        var t = q.join('\n');
        var cls = /^\*\*Pick the right one/i.test(t) ? 'note pick' : /^\*\*(What changed|Test tip|Looks small)/i.test(t) ? 'note what' : 'note';
        out += '<div class="' + cls + '">' + blocks(q) + '</div>'; continue;
      }
      if (/^- \[[ x]\]/.test(l)) {
        flush(); var items = [];
        while (i < lines.length && /^- \[[ x]\]/.test(lines[i])) { items.push(lines[i].replace(/^- \[[ x]\]\s*/, '')); i++; }
        out += '<div class="check"><strong>Checkpoint</strong>' + items.map(function (s) { return '<label><input type="checkbox"> ' + inline(s) + '</label>'; }).join('') + '</div>';
        continue;
      }
      if (/^\s*(\d+\.|-)\s+/.test(l)) {
        flush(); var res = list(lines, i, l.match(/^\s*/)[0].length); out += res.html; i = res.i; continue;
      }
      var img = l.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
      if (img) { flush(); out += '<details class="shot"><summary>Show screenshot</summary><img src="' + img[2] + '" alt="' + esc(img[1]) + '" loading="lazy"></details>'; i++; continue; }
      var vid = l.match(/^@video\s+(\S+)(?:\s+(.*))?$/);
      if (vid) { flush(); out += '<details class="shot"><summary>▶ ' + esc(vid[2] || 'Show video') + '</summary><div class="video"><iframe src="' + ytEmbed(vid[1]) + '" allowfullscreen loading="lazy"></iframe></div></details>'; i++; continue; }
      para.push(l.trim()); i++;
    }
    flush(); return out;
  }

  function list(lines, i, indent) {
    var ordered = /^\s*\d+\./.test(lines[i]), first = parseInt(lines[i], 10), html = ordered ? (first > 1 ? '<ol start="' + first + '">' : '<ol>') : '<ul>';
    while (i < lines.length) {
      var l = lines[i], m = l.match(/^(\s*)(\d+\.|-)\s+(.*)$/);
      if (!m) {
        if (l.trim() && l.match(/^\s*/)[0].length > indent) { html = html.replace(/<\/li>$/, '') + ' ' + inline(l.trim()) + '</li>'; i++; continue; }
        break;
      }
      var ind = m[1].length;
      if (ind < indent) break;
      if (ind > indent) { var sub = list(lines, i, ind); html = html.replace(/<\/li>$/, '') + sub.html + '</li>'; i = sub.i; continue; }
      if (/^\[[ x]\]/.test(m[3])) break;
      html += '<li>' + inline(m[3]) + '</li>'; i++;
    }
    return { html: html + (ordered ? '</ol>' : '</ul>'), i: i };
  }

  // Approval code: status: approved in the front matter = tried in class and bugs worked through.
  function statusBadge(st) {
    return st === 'approved' ? '<span class="status ok">✓ Tested and approved</span>' : '<span class="status wait">◷ Waiting for approval</span>';
  }

  // lessons.json is the master list: it sets each lesson's number and approval status.
  var listing = fetch(base + 'lessons.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).catch(function () { return []; });

  Promise.all([fetch('lesson.md', { cache: 'no-cache' }).then(function (r) { return r.text(); }), listing]).then(function (res) {
    var text = res[0], all = res[1] || [];
    var fm = parseFront(text.replace(/\r/g, '')), meta = fm.meta, lines = fm.body.split('\n');
    var here = location.pathname.replace(/index\.html$/, '');
    all.forEach(function (l) {
      if (here.slice(-l.path.length) === l.path) {
        if (l.programs && l.programs[meta.program] !== undefined) meta.lesson = String(l.programs[meta.program]);
        if (l.status) meta.status = l.status;
      }
    });
    document.title = (meta.lesson !== undefined ? meta.program + ' Lesson ' + meta.lesson + ' · ' : '') + meta.title + ' · Winters Innovative Solutions';
    var folder = (meta.program || '').toLowerCase().replace(/\s+/g, '').replace('unrealengine', 'unreal').replace('construct3', 'construct3');
    var html = '<header><div class="crumb"><a href="' + base + '">Lessons</a> › <a href="' + base + folder + '/">' + esc(meta.program || '') + '</a></div>' +
      '<div class="lessonnum">' + esc(meta.program || '') + ' · Lesson ' + esc(meta.lesson || '') + ' ' + statusBadge(meta.status) + '</div><h1>' + inline(meta.title || '') + '</h1>' +
      (meta.blurb ? '<p class="sub">' + inline(meta.blurb) + '</p>' : '') + '</header>';
    if (meta.video) html += '<p class="vidlink"><a href="' + meta.video + '" target="_blank" rel="noreferrer">▶ Watch the video for this lesson</a></p>';

    // Split: intro (before first ## or ```brief), brief, parts.
    var intro = [], brief = null, parts = [], cur = null, i = 0;
    while (i < lines.length) {
      var l = lines[i];
      if (/^```brief/.test(l)) { brief = []; i++; while (i < lines.length && !/^```/.test(lines[i])) { brief.push(lines[i]); i++; } i++; continue; }
      if (/^## /.test(l)) { cur = { title: l.slice(3), lines: [] }; parts.push(cur); i++; continue; }
      (cur ? cur.lines : intro).push(l); i++;
    }
    if (intro.join('').trim()) html += '<section class="intro">' + blocks(intro) + '</section>';
    var colours = parts.map(function (p, n) { return 'var(--p' + (n % 7 + 1) + ')'; });
    var partNums = [];
    parts.forEach(function (p, n) { if (/^(Part|Bonus|Extra)\b/i.test(p.title)) partNums.push(n); });
    if (brief) {
      html += '<section class="brief"><h2>Lesson brief</h2><p>If you already know ' + esc(meta.program || 'the software') + ', follow the chart and you can finish from it alone. Click any box to jump to its full steps; the Back to the brief button brings you back here.</p>' +
        renderBrief(brief, partNums.map(function (n) { return colours[n]; })) +
        '<p class="key">Each colour is one part. Codes like 2B mean Part 2, section B. Underlined words are links.</p></section>';
    }
    html += '<div class="controls"><button type="button" id="openAll">Open all parts</button><button type="button" id="closeAll">Close all parts</button><button type="button" id="clearTicks">Clear my ticks</button></div>';
    var pIndex = 0;
    parts.forEach(function (p, n) {
      var isPart = /^(Part|Bonus|Extra)\b/i.test(p.title);
      var id = isPart ? 'part' + (++pIndex) : 'sec' + n;
      html += '<details class="part" id="' + id + '" name="parts" style="--c:' + colours[n] + '"><summary><h2>' + inline(p.title) + '</h2><span class="done"></span></summary><div class="body">' + blocks(p.lines) + '</div></details>';
    });
    html += '<footer>Winters Innovative Solutions · <a href="https://www.youtube.com/@winters.innovative.solutions" target="_blank" rel="noreferrer">YouTube channel</a></footer>';
    root.innerHTML = html;
    var s = document.createElement('script'); s.src = base + 'assets/lesson.js?v=20261122e'; document.body.appendChild(s);
  }).catch(function () { root.innerHTML = '<p>Sorry, this lesson could not be loaded.</p>'; });
})();
