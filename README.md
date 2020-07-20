# Balade avec [\@Villovelo](https://twitter.com/villovelo) pour vous weekend de vacances autour de Niort.

Les beaux jours sont là, une grande envie de liberté se fait sentir. Quoi de mieux que de se balader cheveux au vent au guidon de votre petite reine qui ne demande qu'à rouler vers de nouveaux horizons. [\@VilloVelo](https://twitter.com/VillOvelO) vous proposes quatres balades de 20km à 35km faciles et accessible. De bonnes idées pour un pique-nique. Quatre sorties pour découvrir les alentours de notre belle ville de niort.

Avant de sauter sur votre fidèle destrier rappelons que vous devez vérifier au minimum (la pression des pneus, les freins, l'état général du vélo et la météo). Un problème évité c'est autant de plaisir gagné. Emportez aussi de quoi vous désaltérer et vous sustenter durant votre balade.

Consulter le site [ici](https://villovelo.github.io/balade_2020/)

## Développement

le contenue de ces balades est rédiger en markdown ([balade_01.md](balade_01.md), [balade_02.md](balade_02.md), [balade_03.md](balade_03.md), [balade_04.md](balade_04.md)).
Ces pages sont convertient en html à l'aide de pandoc en utilisant le template [template_villovelo.html](template_villovelo.html) pour les pages web et [styles.html](styles.html) pour la partie style.

La visualisation des traces gpx se fait en utilisant la page [voir_trace.html](voir_trace.html)

La génération des QRcode pour les pdf et impression est assuré avec la librairie [qrcodejs](https://github.com/davidshimjs/qrcodejs)

## Installation (sur OSX)

- brew install pandoc
- brew cask install wkhtmltopdf

## éxemple de commande

```bash
pandoc balade_01.md -o balade_01.html --template ./template_villovelo.html
wkhtmltopdf --print-media-type --page-width 140 --page-height 740 https://villovelo.github.io/balade_2020/balade_01.html balade_01.pdf
wkhtmltoimage --crop-x 212 --crop-y 100 --crop-w 599 https://villovelo.github.io/balade_2020/balade_01.html balade_01.jpg
```

## Remerciement

- Barbara et Patrice pour leurs corrections et avis.
- [\@VilloVelo](https://twitter.com/VillOvelO) pour le support
- [@furtif](https://twitter.com/furtif) et [@lamap](https://twitter.com/lamap) pour l'accélération car cet idée ça faisait un bail que je voulais le faire. Bravo à vous.
