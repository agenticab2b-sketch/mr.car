$ErrorActionPreference = 'Stop'
$base = $PSScriptRoot + '\..'
$file = Join-Path $base 'ru\services\remont-akpp.html'
$lines = [System.IO.File]::ReadAllLines($file, [System.Text.Encoding]::UTF8)
Write-Host "Original lines: $($lines.Count)"

# Head: everything before <article> (lines 1-470, 0-indexed 0-469)
# The article opens at 0-indexed 470 (line 471)
# The article closes at 0-indexed 727 (line 728)
# Tail: everything after </article> (0-indexed 728+, line 729+)
$head = $lines[0..469]
$tail = $lines[728..($lines.Count-1)]

$p1 = [System.IO.File]::ReadAllLines((Join-Path $base 'Test html\akpp-content-part1.html'), [System.Text.Encoding]::UTF8)
$p2 = [System.IO.File]::ReadAllLines((Join-Path $base 'Test html\akpp-content-part2.html'), [System.Text.Encoding]::UTF8)

# Build: head + "<!-- LEFT: Content -->" + article open + content + article close + tail
$mid = @(
  '    <!-- LEFT: Content -->',
  '    <article class="sd-content">'
)
$closing = @(
  '',
  '</article>'
)

$all = $head + $mid + $p1 + $p2 + $closing + $tail
[System.IO.File]::WriteAllLines($file, $all, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Done. New file: $($all.Count) lines"
