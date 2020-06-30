https://www.mygpsfiles.com/app/

pandoc -s README.md -o example.html
pandoc README.md -o index.html --template ./template_villovelo.html
https://startbootstrap.com/previews/grayscale/
https://convertio.co/fr

R81 V80 B161

balade 01 : 00008B
balade 02 : 00730B
balade 03 : A1039B
balade 04 : 520500

export to :
balade_01 html : pandoc balade_01.md -o balade_01.html --template ./template_villovelo.html
balade_01 pdf : wkhtmltopdf --page-width 140 --page-height 740 https://villovelo.github.io/balade_2020/balade_01.html balade_01.pdf
balade_01 jpg : wkhtmltoimage --crop-x 212 --crop-y 100 --crop-w 599 https://villovelo.github.io/balade_2020/balade_01.html balade_01.jpg

- nota (1024 - 600)/2 = 212

balade_02 html : pandoc balade_02.md -o balade_02.html --template ./template_villovelo.html
balade_02 jpg : wkhtmltoimage --crop-x 212 --crop-y 100 --crop-w 599 http://localhost/balade_02.html balade_02.jpg
balade_02 pdf : wkhtmltopdf --page-width 140 --page-height 1000 https://tisseurdetoile.github.io/balade_villovello_2020/balade_02.html balade_02.pdf

balade_03 html : pandoc balade_03.md -o balade_03.html --template ./template_villovelo.html
balade_03 jpg : wkhtmltoimage --crop-x 212 --crop-y 100 --crop-w 599 http://localhost/balade_02.html balade_02.jpg
balade_03 pdf : wkhtmltopdf --page-width 140 --page-height 880 https://tisseurdetoile.github.io/balade_villovello_2020/balade_03.html balade_03.pdf
