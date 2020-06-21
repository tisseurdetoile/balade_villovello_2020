https://www.mygpsfiles.com/app/

pandoc -s README.md -o example.html
pandoc README.md -o index.html --template ./template_villovelo.html
https://startbootstrap.com/previews/grayscale/
https://convertio.co/fr

balade 02 : 00730B
balade 03 : A1039B

export to :
balade_01 html : pandoc balade_01.md -o balade_01.html --template ./template_villovelo.html
balade_01 pdf : wkhtmltopdf --page-width 140 --page-height 730 https://tisseurdetoile.github.io/balade_villovello_2020/balade_01.html balade_01.pdf
balade_01 jpg : wkhtmltoimage --crop-x 212 --crop-y 100 --crop-w 599 http://localhost/balade_01.html balade_01.jpg

- nota (1024 - 600)/2 = 212
