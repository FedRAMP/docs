ls *.md | awk -F\.md '{print $1}' | while read X; do
mdpdf $X.md ../pdf/$X.pdf
done

cd combined
ls *.md | awk -F\.md '{print $1}' | while read X; do
mdpdf $X.md ../../pdf/combined/$X.pdf
done
cd ..