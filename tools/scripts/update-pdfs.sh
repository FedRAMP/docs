ls *.md | awk -F\.md '{print $1}' | while read X; do
mdpdf $X.md ../pdf/$X.pdf
done