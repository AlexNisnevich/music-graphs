const elements = [
  {
    "data": {
      "fullName": "Antoine Fran\u00e7ois Marmontel",
      "id": "A. Marmontel",
      "weight": 41.36693133259925
    }
  },
  {
    "data": {
      "fullName": "Albert Lavignac",
      "id": "A. Lavignac",
      "weight": 25.083082460355822
    }
  },
  {
    "data": {
      "fullName": "Jean Gallon",
      "id": "J. Gallon",
      "weight": 31.415579815105247
    }
  },
  {
    "data": {
      "fullName": "Louis Di\u00e9mer",
      "id": "L. Di\u00e9mer",
      "weight": 26.71441636589828
    }
  },
  {
    "data": {
      "fullName": "Th\u00e9odore Dubois",
      "id": "T. Dubois",
      "weight": 24.071964647004087
    }
  },
  {
    "data": {
      "fullName": "Romain-Octave Pelletier I",
      "id": "R. Pelletier",
      "weight": 19.942756316520274
    }
  },
  {
    "data": {
      "fullName": "Ernest Guiraud",
      "id": "E. Guiraud",
      "weight": 26.026048091692797
    }
  },
  {
    "data": {
      "fullName": "Andr\u00e9 Gedalge",
      "id": "A. Gedalge",
      "weight": 61.50596316704689
    }
  },
  {
    "data": {
      "fullName": "Lazare L\u00e9vy",
      "id": "L. L\u00e9vy",
      "weight": 27.360912071640374
    }
  },
  {
    "data": {
      "fullName": "Fr\u00e9d\u00e9ric Chopin",
      "id": "F. Chopin",
      "weight": 23.999793528299378
    }
  },
  {
    "data": {
      "fullName": "Georges Mathias",
      "id": "G. Mathias",
      "weight": 24.770121001483794
    }
  },
  {
    "data": {
      "fullName": "Paul Dukas",
      "id": "P. Dukas",
      "weight": 29.310905501736993
    }
  },
  {
    "data": {
      "fullName": "Percy Goetschius",
      "id": "P. Goetschius",
      "weight": 28.673532663945988
    }
  },
  {
    "data": {
      "fullName": "Henry Cowell",
      "id": "H. Cowell",
      "weight": 20.842261614321316
    }
  },
  {
    "data": {
      "fullName": "Howard Hanson",
      "id": "H. Hanson",
      "weight": 36.858456618274786
    }
  },
  {
    "data": {
      "fullName": "Fran\u00e7ois-Joseph F\u00e9tis",
      "id": "F. F\u00e9tis",
      "weight": 24.443682327113567
    }
  },
  {
    "data": {
      "fullName": "Jacques-Nicolas Lemmens",
      "id": "J. Lemmens",
      "weight": 16.048209797378036
    }
  },
  {
    "data": {
      "fullName": "Charles-Marie Widor",
      "id": "C. Widor",
      "weight": 44.484263121941254
    }
  },
  {
    "data": {
      "fullName": "Arnold Schoenberg",
      "id": "A. Schoenberg",
      "weight": 50.654900264256106
    }
  },
  {
    "data": {
      "fullName": "Alban Berg",
      "id": "A. Berg",
      "weight": 17.94766207490612
    }
  },
  {
    "data": {
      "fullName": "Leonard Stein",
      "id": "L. Stein",
      "weight": 23.908216528647472
    }
  },
  {
    "data": {
      "fullName": "Roberto Gerhard",
      "id": "R. Gerhard",
      "weight": 14.556669835076214
    }
  },
  {
    "data": {
      "fullName": "Paul Pisk",
      "id": "P. Pisk",
      "weight": 14.495197054839098
    }
  },
  {
    "data": {
      "fullName": "Ernst Krenek",
      "id": "E. Krenek",
      "weight": 21.89575138563489
    }
  },
  {
    "data": {
      "fullName": "John Cage",
      "id": "J. Cage",
      "weight": 23.831375553351073
    }
  },
  {
    "data": {
      "fullName": "Johann Georg Albrechtsberger",
      "id": "J. Albrechtsberger",
      "weight": 29.217225134068297
    }
  },
  {
    "data": {
      "fullName": "Anton Reicha",
      "id": "A. Reicha",
      "weight": 32.980318413633434
    }
  },
  {
    "data": {
      "fullName": "C\u00e9sar Franck",
      "id": "C. Franck",
      "weight": 25.87249984439702
    }
  },
  {
    "data": {
      "fullName": "Louis Vierne",
      "id": "L. Vierne",
      "weight": 41.166462141604086
    }
  },
  {
    "data": {
      "fullName": "Marcel Dupr\u00e9",
      "id": "M. Dupr\u00e9",
      "weight": 23.318846248124125
    }
  },
  {
    "data": {
      "fullName": "Vincent d'Indy",
      "id": "V. d'Indy",
      "weight": 51.04558829066483
    }
  },
  {
    "data": {
      "fullName": "Darius Milhaud",
      "id": "D. Milhaud",
      "weight": 98.8189465255969
    }
  },
  {
    "data": {
      "fullName": "Antonio Salieri",
      "id": "A. Salieri",
      "weight": 29.611476968070274
    }
  },
  {
    "data": {
      "fullName": "Ludwig van Beethoven",
      "id": "L. Beethoven",
      "weight": 14.752607329553273
    }
  },
  {
    "data": {
      "fullName": "Johann Nepomuk Hummel",
      "id": "J. Hummel",
      "weight": 17.668722342051456
    }
  },
  {
    "data": {
      "fullName": "Carl Czerny",
      "id": "C. Czerny",
      "weight": 26.78971706384486
    }
  },
  {
    "data": {
      "fullName": "Franz Liszt",
      "id": "F. Liszt",
      "weight": 42.98855499777546
    }
  },
  {
    "data": {
      "fullName": "Carl Reinecke",
      "id": "C. Reinecke",
      "weight": 36.02425562226207
    }
  },
  {
    "data": {
      "fullName": "Istv\u00e1n Thom\u00e1n",
      "id": "I. Thom\u00e1n",
      "weight": 16.416010892976658
    }
  },
  {
    "data": {
      "fullName": "Stephen Heller",
      "id": "S. Heller",
      "weight": 13.464431465149929
    }
  },
  {
    "data": {
      "fullName": "Isidor Philipp",
      "id": "I. Philipp",
      "weight": 36.9602171218598
    }
  },
  {
    "data": {
      "fullName": "Ignaz Moscheles",
      "id": "I. Moscheles",
      "weight": 27.808612105988296
    }
  },
  {
    "data": {
      "fullName": "Louis Niedermeyer",
      "id": "L. Niedermeyer",
      "weight": 14.09103004558975
    }
  },
  {
    "data": {
      "fullName": "Gabriel Faur\u00e9",
      "id": "G. Faur\u00e9",
      "weight": 43.22620592305605
    }
  },
  {
    "data": {
      "fullName": "Nadia Boulanger",
      "id": "N. Boulanger",
      "weight": 200.0
    }
  },
  {
    "data": {
      "fullName": "Marion Bauer",
      "id": "M. Bauer",
      "weight": 16.135290831565353
    }
  },
  {
    "data": {
      "fullName": "Aaron Copland",
      "id": "A. Copland",
      "weight": 42.701444379812656
    }
  },
  {
    "data": {
      "fullName": "Charles Koechlin",
      "id": "C. Koechlin",
      "weight": 12.258658786880785
    }
  },
  {
    "data": {
      "fullName": "Claude Champagne",
      "id": "C. Champagne",
      "weight": 24.90249202966984
    }
  },
  {
    "data": {
      "fullName": "Maurice Ravel",
      "id": "M. Ravel",
      "weight": 15.263606807803047
    }
  },
  {
    "data": {
      "fullName": "Aleksander Micha\u0142owski",
      "id": "A. Micha\u0142owski",
      "weight": 19.636626711920883
    }
  },
  {
    "data": {
      "fullName": "Heinrich Neuhaus",
      "id": "H. Neuhaus",
      "weight": 25.5295611074014
    }
  },
  {
    "data": {
      "fullName": "Randall Thompson",
      "id": "R. Thompson",
      "weight": 25.99060695917977
    }
  },
  {
    "data": {
      "fullName": "Moritz Hauptmann",
      "id": "M. Hauptmann",
      "weight": 32.94007126232049
    }
  },
  {
    "data": {
      "fullName": "Friedrich Kiel",
      "id": "F. Kiel",
      "weight": 21.994338356940162
    }
  },
  {
    "data": {
      "fullName": "Charles Villiers Stanford",
      "id": "C. Stanford",
      "weight": 40.72179033325163
    }
  },
  {
    "data": {
      "fullName": "Charles Wood",
      "id": "C. Wood",
      "weight": 15.96285968300024
    }
  },
  {
    "data": {
      "fullName": "Ralph Vaughan Williams",
      "id": "R. Williams",
      "weight": 24.215580429833047
    }
  },
  {
    "data": {
      "fullName": "Isidor Seiss",
      "id": "I. Seiss",
      "weight": 18.458734782605358
    }
  },
  {
    "data": {
      "fullName": "Joseph Joachim",
      "id": "J. Joachim",
      "weight": 30.423024937201717
    }
  },
  {
    "data": {
      "fullName": "Leopold Auer",
      "id": "L. Auer",
      "weight": 24.001194108756106
    }
  },
  {
    "data": {
      "fullName": "Jen\u0151 Hubay",
      "id": "J. Hubay",
      "weight": 25.982922861650124
    }
  },
  {
    "data": {
      "fullName": "Salomon Jadassohn",
      "id": "S. Jadassohn",
      "weight": 38.348756136712396
    }
  },
  {
    "data": {
      "fullName": "Ferruccio Busoni",
      "id": "F. Busoni",
      "weight": 40.010091294762745
    }
  },
  {
    "data": {
      "fullName": "Egon Petri",
      "id": "E. Petri",
      "weight": 24.75346725690781
    }
  },
  {
    "data": {
      "fullName": "Otto Luening",
      "id": "O. Luening",
      "weight": 34.247169754777396
    }
  },
  {
    "data": {
      "fullName": "Seymour Shifrin",
      "id": "S. Shifrin",
      "weight": 27.604267440404058
    }
  },
  {
    "data": {
      "fullName": "Paul Hindemith",
      "id": "P. Hindemith",
      "weight": 49.90582370067674
    }
  },
  {
    "data": {
      "fullName": "No\u00ebl Gallon",
      "id": "N. Gallon",
      "weight": 37.3015985228091
    }
  },
  {
    "data": {
      "fullName": "Henri Dutilleux",
      "id": "H. Dutilleux",
      "weight": 16.12422573112267
    }
  },
  {
    "data": {
      "fullName": "Olivier Messiaen",
      "id": "O. Messiaen",
      "weight": 80.17886273819742
    }
  },
  {
    "data": {
      "fullName": "Karlheinz Stockhausen",
      "id": "K. Stockhausen",
      "weight": 83.0527152142826
    }
  },
  {
    "data": {
      "fullName": "G\u00e9rard Grisey",
      "id": "G. Grisey",
      "weight": 25.137672133389785
    }
  },
  {
    "data": {
      "fullName": "Alexander Goehr",
      "id": "A. Goehr",
      "weight": 25.75239993576095
    }
  },
  {
    "data": {
      "fullName": "Ton de Leeuw",
      "id": "T. Leeuw",
      "weight": 24.061898479240256
    }
  },
  {
    "data": {
      "fullName": "Edward Burlingame Hill",
      "id": "E. Hill",
      "weight": 28.416430444701774
    }
  },
  {
    "data": {
      "fullName": "Walter Piston",
      "id": "W. Piston",
      "weight": 35.11163072686185
    }
  },
  {
    "data": {
      "fullName": "Samuel Adler",
      "id": "S. Adler",
      "weight": 31.89967795947254
    }
  },
  {
    "data": {
      "fullName": "Simon Sechter",
      "id": "S. Sechter",
      "weight": 31.952352524879185
    }
  },
  {
    "data": {
      "fullName": "Theodor Leschetizky",
      "id": "T. Leschetizky",
      "weight": 35.44923308864606
    }
  },
  {
    "data": {
      "fullName": "Anna Yesipova",
      "id": "A. Yesipova",
      "weight": 23.830084624966098
    }
  },
  {
    "data": {
      "fullName": "Artur Schnabel",
      "id": "A. Schnabel",
      "weight": 32.52208985937334
    }
  },
  {
    "data": {
      "fullName": "Maria Curcio",
      "id": "M. Curcio",
      "weight": 33.8207023418824
    }
  },
  {
    "data": {
      "fullName": "Isabelle Vengerova",
      "id": "I. Vengerova",
      "weight": 24.34866899904641
    }
  },
  {
    "data": {
      "fullName": "Robert Fuchs",
      "id": "R. Fuchs",
      "weight": 28.410736528432317
    }
  },
  {
    "data": {
      "fullName": "Eusebius Mandyczewski",
      "id": "E. Mandyczewski",
      "weight": 15.10008921237232
    }
  },
  {
    "data": {
      "fullName": "Rosario Scalero",
      "id": "R. Scalero",
      "weight": 27.9592727462734
    }
  },
  {
    "data": {
      "fullName": "Lukas Foss",
      "id": "L. Foss",
      "weight": 31.208109181804982
    }
  },
  {
    "data": {
      "fullName": "Gian Carlo Menotti",
      "id": "G. Menotti",
      "weight": 15.37886827074764
    }
  },
  {
    "data": {
      "fullName": "George Rochberg",
      "id": "G. Rochberg",
      "weight": 25.368195059278968
    }
  },
  {
    "data": {
      "fullName": "Franz Lachner",
      "id": "F. Lachner",
      "weight": 15.292462054005375
    }
  },
  {
    "data": {
      "fullName": "Josef Rheinberger",
      "id": "J. Rheinberger",
      "weight": 29.88300408256102
    }
  },
  {
    "data": {
      "fullName": "Hans von Koessler",
      "id": "H. Koessler",
      "weight": 19.900364917791688
    }
  },
  {
    "data": {
      "fullName": "B\u00e9la Bart\u00f3k",
      "id": "B. Bart\u00f3k",
      "weight": 26.095571731434646
    }
  },
  {
    "data": {
      "fullName": "Fritz Reiner",
      "id": "F. Reiner",
      "weight": 14.499807513356881
    }
  },
  {
    "data": {
      "fullName": "Vincent Persichetti",
      "id": "V. Persichetti",
      "weight": 26.56691427390273
    }
  },
  {
    "data": {
      "fullName": "Engelbert Humperdinck",
      "id": "E. Humperdinck",
      "weight": 26.51315940122438
    }
  },
  {
    "data": {
      "fullName": "Horatio Parker",
      "id": "H. Parker",
      "weight": 21.00972883588228
    }
  },
  {
    "data": {
      "fullName": "Ludwig Thuille",
      "id": "L. Thuille",
      "weight": 18.919872536190177
    }
  },
  {
    "data": {
      "fullName": "Ernest Bloch",
      "id": "E. Bloch",
      "weight": 25.800225758785423
    }
  },
  {
    "data": {
      "fullName": "Bernard Rogers",
      "id": "B. Rogers",
      "weight": 35.08243115624921
    }
  },
  {
    "data": {
      "fullName": "John Weinzweig",
      "id": "J. Weinzweig",
      "weight": 35.74172672429228
    }
  },
  {
    "data": {
      "fullName": "Peter Mennin",
      "id": "P. Mennin",
      "weight": 17.077053824797968
    }
  },
  {
    "data": {
      "fullName": "Jacob Druckman",
      "id": "J. Druckman",
      "weight": 34.665953070142756
    }
  },
  {
    "data": {
      "fullName": "Roger Sessions",
      "id": "R. Sessions",
      "weight": 68.90583061636453
    }
  },
  {
    "data": {
      "fullName": "Milton Babbitt",
      "id": "M. Babbitt",
      "weight": 40.616518197095566
    }
  },
  {
    "data": {
      "fullName": "Mario Davidovsky",
      "id": "M. Davidovsky",
      "weight": 24.922517402559883
    }
  },
  {
    "data": {
      "fullName": "Ross Lee Finney",
      "id": "R. Finney",
      "weight": 28.003840511945317
    }
  },
  {
    "data": {
      "fullName": "Roger Reynolds",
      "id": "R. Reynolds",
      "weight": 29.4407667499879
    }
  },
  {
    "data": {
      "fullName": "Robert Erickson",
      "id": "R. Erickson",
      "weight": 25.06851525562303
    }
  },
  {
    "data": {
      "fullName": "Pauline Oliveros",
      "id": "P. Oliveros",
      "weight": 23.908216528647472
    }
  },
  {
    "data": {
      "source": "E. Krenek",
      "target": "R. Erickson"
    }
  },
  {
    "data": {
      "source": "L. Vierne",
      "target": "M. Dupr\u00e9"
    }
  },
  {
    "data": {
      "source": "L. Vierne",
      "target": "N. Boulanger"
    }
  },
  {
    "data": {
      "source": "P. Pisk",
      "target": "S. Adler"
    }
  },
  {
    "data": {
      "source": "B. Bart\u00f3k",
      "target": "F. Reiner"
    }
  },
  {
    "data": {
      "source": "H. Dutilleux",
      "target": "G. Grisey"
    }
  },
  {
    "data": {
      "source": "C. Wood",
      "target": "R. Williams"
    }
  },
  {
    "data": {
      "source": "K. Stockhausen",
      "target": "G. Grisey"
    }
  },
  {
    "data": {
      "source": "S. Sechter",
      "target": "F. Lachner"
    }
  },
  {
    "data": {
      "source": "S. Sechter",
      "target": "R. Fuchs"
    }
  },
  {
    "data": {
      "source": "S. Sechter",
      "target": "T. Leschetizky"
    }
  },
  {
    "data": {
      "source": "T. Dubois",
      "target": "P. Dukas"
    }
  },
  {
    "data": {
      "source": "R. Sessions",
      "target": "R. Erickson"
    }
  },
  {
    "data": {
      "source": "R. Sessions",
      "target": "R. Finney"
    }
  },
  {
    "data": {
      "source": "R. Sessions",
      "target": "M. Babbitt"
    }
  },
  {
    "data": {
      "source": "C. Koechlin",
      "target": "C. Champagne"
    }
  },
  {
    "data": {
      "source": "F. Liszt",
      "target": "I. Thom\u00e1n"
    }
  },
  {
    "data": {
      "source": "F. Liszt",
      "target": "C. Reinecke"
    }
  },
  {
    "data": {
      "source": "O. Luening",
      "target": "S. Shifrin"
    }
  },
  {
    "data": {
      "source": "O. Luening",
      "target": "M. Davidovsky"
    }
  },
  {
    "data": {
      "source": "A. Berg",
      "target": "R. Finney"
    }
  },
  {
    "data": {
      "source": "P. Dukas",
      "target": "W. Piston"
    }
  },
  {
    "data": {
      "source": "P. Dukas",
      "target": "O. Messiaen"
    }
  },
  {
    "data": {
      "source": "H. Hanson",
      "target": "P. Mennin"
    }
  },
  {
    "data": {
      "source": "H. Hanson",
      "target": "J. Weinzweig"
    }
  },
  {
    "data": {
      "source": "G. Faur\u00e9",
      "target": "M. Ravel"
    }
  },
  {
    "data": {
      "source": "G. Faur\u00e9",
      "target": "C. Koechlin"
    }
  },
  {
    "data": {
      "source": "G. Faur\u00e9",
      "target": "N. Boulanger"
    }
  },
  {
    "data": {
      "source": "E. Hill",
      "target": "R. Finney"
    }
  },
  {
    "data": {
      "source": "E. Hill",
      "target": "W. Piston"
    }
  },
  {
    "data": {
      "source": "E. Hill",
      "target": "R. Sessions"
    }
  },
  {
    "data": {
      "source": "F. Kiel",
      "target": "C. Stanford"
    }
  },
  {
    "data": {
      "source": "I. Vengerova",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "M. Ravel",
      "target": "R. Williams"
    }
  },
  {
    "data": {
      "source": "C. Czerny",
      "target": "S. Heller"
    }
  },
  {
    "data": {
      "source": "C. Czerny",
      "target": "T. Leschetizky"
    }
  },
  {
    "data": {
      "source": "C. Czerny",
      "target": "F. Liszt"
    }
  },
  {
    "data": {
      "source": "H. Parker",
      "target": "R. Sessions"
    }
  },
  {
    "data": {
      "source": "A. Copland",
      "target": "S. Adler"
    }
  },
  {
    "data": {
      "source": "A. Copland",
      "target": "J. Druckman"
    }
  },
  {
    "data": {
      "source": "A. Copland",
      "target": "M. Davidovsky"
    }
  },
  {
    "data": {
      "source": "G. Menotti",
      "target": "G. Rochberg"
    }
  },
  {
    "data": {
      "source": "L. L\u00e9vy",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "L. L\u00e9vy",
      "target": "J. Cage"
    }
  },
  {
    "data": {
      "source": "L. L\u00e9vy",
      "target": "M. Dupr\u00e9"
    }
  },
  {
    "data": {
      "source": "P. Mennin",
      "target": "J. Druckman"
    }
  },
  {
    "data": {
      "source": "S. Shifrin",
      "target": "P. Oliveros"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "M. Curcio"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "A. Copland"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "G. Menotti"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "W. Piston"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "B. Rogers"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "R. Finney"
    }
  },
  {
    "data": {
      "source": "N. Boulanger",
      "target": "M. Bauer"
    }
  },
  {
    "data": {
      "source": "R. Erickson",
      "target": "P. Oliveros"
    }
  },
  {
    "data": {
      "source": "N. Gallon",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "N. Gallon",
      "target": "O. Messiaen"
    }
  },
  {
    "data": {
      "source": "N. Gallon",
      "target": "H. Dutilleux"
    }
  },
  {
    "data": {
      "source": "L. Thuille",
      "target": "E. Bloch"
    }
  },
  {
    "data": {
      "source": "J. Lemmens",
      "target": "C. Widor"
    }
  },
  {
    "data": {
      "source": "P. Hindemith",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "P. Hindemith",
      "target": "S. Adler"
    }
  },
  {
    "data": {
      "source": "M. Hauptmann",
      "target": "S. Jadassohn"
    }
  },
  {
    "data": {
      "source": "M. Hauptmann",
      "target": "J. Joachim"
    }
  },
  {
    "data": {
      "source": "M. Hauptmann",
      "target": "I. Seiss"
    }
  },
  {
    "data": {
      "source": "M. Hauptmann",
      "target": "F. Kiel"
    }
  },
  {
    "data": {
      "source": "I. Philipp",
      "target": "A. Copland"
    }
  },
  {
    "data": {
      "source": "L. Beethoven",
      "target": "C. Czerny"
    }
  },
  {
    "data": {
      "source": "H. Koessler",
      "target": "B. Bart\u00f3k"
    }
  },
  {
    "data": {
      "source": "R. Thompson",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "R. Thompson",
      "target": "S. Adler"
    }
  },
  {
    "data": {
      "source": "A. Salieri",
      "target": "I. Moscheles"
    }
  },
  {
    "data": {
      "source": "A. Salieri",
      "target": "F. Liszt"
    }
  },
  {
    "data": {
      "source": "A. Salieri",
      "target": "J. Hummel"
    }
  },
  {
    "data": {
      "source": "A. Salieri",
      "target": "L. Beethoven"
    }
  },
  {
    "data": {
      "source": "A. Salieri",
      "target": "C. Czerny"
    }
  },
  {
    "data": {
      "source": "W. Piston",
      "target": "S. Adler"
    }
  },
  {
    "data": {
      "source": "F. Lachner",
      "target": "J. Rheinberger"
    }
  },
  {
    "data": {
      "source": "A. Reicha",
      "target": "C. Franck"
    }
  },
  {
    "data": {
      "source": "A. Reicha",
      "target": "F. Liszt"
    }
  },
  {
    "data": {
      "source": "R. Fuchs",
      "target": "E. Mandyczewski"
    }
  },
  {
    "data": {
      "source": "O. Messiaen",
      "target": "T. Leeuw"
    }
  },
  {
    "data": {
      "source": "O. Messiaen",
      "target": "G. Grisey"
    }
  },
  {
    "data": {
      "source": "O. Messiaen",
      "target": "A. Goehr"
    }
  },
  {
    "data": {
      "source": "O. Messiaen",
      "target": "K. Stockhausen"
    }
  },
  {
    "data": {
      "source": "J. Hummel",
      "target": "C. Czerny"
    }
  },
  {
    "data": {
      "source": "B. Rogers",
      "target": "P. Mennin"
    }
  },
  {
    "data": {
      "source": "B. Rogers",
      "target": "J. Weinzweig"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "C. Champagne"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "N. Boulanger"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "M. Bauer"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "L. L\u00e9vy"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "C. Koechlin"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "D. Milhaud"
    }
  },
  {
    "data": {
      "source": "A. Gedalge",
      "target": "M. Ravel"
    }
  },
  {
    "data": {
      "source": "C. Widor",
      "target": "D. Milhaud"
    }
  },
  {
    "data": {
      "source": "C. Widor",
      "target": "L. Vierne"
    }
  },
  {
    "data": {
      "source": "C. Widor",
      "target": "O. Messiaen"
    }
  },
  {
    "data": {
      "source": "C. Widor",
      "target": "M. Dupr\u00e9"
    }
  },
  {
    "data": {
      "source": "M. Dupr\u00e9",
      "target": "O. Messiaen"
    }
  },
  {
    "data": {
      "source": "J. Albrechtsberger",
      "target": "I. Moscheles"
    }
  },
  {
    "data": {
      "source": "J. Albrechtsberger",
      "target": "A. Reicha"
    }
  },
  {
    "data": {
      "source": "J. Albrechtsberger",
      "target": "J. Hummel"
    }
  },
  {
    "data": {
      "source": "J. Albrechtsberger",
      "target": "L. Beethoven"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "J. Cage"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "E. Krenek"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "P. Pisk"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "R. Gerhard"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "L. Stein"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "A. Goehr"
    }
  },
  {
    "data": {
      "source": "A. Schoenberg",
      "target": "A. Berg"
    }
  },
  {
    "data": {
      "source": "I. Moscheles",
      "target": "A. Micha\u0142owski"
    }
  },
  {
    "data": {
      "source": "I. Moscheles",
      "target": "L. Niedermeyer"
    }
  },
  {
    "data": {
      "source": "S. Heller",
      "target": "I. Philipp"
    }
  },
  {
    "data": {
      "source": "I. Seiss",
      "target": "E. Humperdinck"
    }
  },
  {
    "data": {
      "source": "E. Bloch",
      "target": "R. Sessions"
    }
  },
  {
    "data": {
      "source": "E. Bloch",
      "target": "B. Rogers"
    }
  },
  {
    "data": {
      "source": "J. Rheinberger",
      "target": "L. Thuille"
    }
  },
  {
    "data": {
      "source": "J. Rheinberger",
      "target": "H. Parker"
    }
  },
  {
    "data": {
      "source": "J. Rheinberger",
      "target": "E. Humperdinck"
    }
  },
  {
    "data": {
      "source": "J. Rheinberger",
      "target": "H. Koessler"
    }
  },
  {
    "data": {
      "source": "T. Leschetizky",
      "target": "A. Schnabel"
    }
  },
  {
    "data": {
      "source": "T. Leschetizky",
      "target": "I. Vengerova"
    }
  },
  {
    "data": {
      "source": "T. Leschetizky",
      "target": "A. Yesipova"
    }
  },
  {
    "data": {
      "source": "R. Finney",
      "target": "R. Reynolds"
    }
  },
  {
    "data": {
      "source": "V. d'Indy",
      "target": "D. Milhaud"
    }
  },
  {
    "data": {
      "source": "A. Lavignac",
      "target": "J. Gallon"
    }
  },
  {
    "data": {
      "source": "A. Lavignac",
      "target": "V. d'Indy"
    }
  },
  {
    "data": {
      "source": "A. Lavignac",
      "target": "L. L\u00e9vy"
    }
  },
  {
    "data": {
      "source": "A. Yesipova",
      "target": "I. Vengerova"
    }
  },
  {
    "data": {
      "source": "A. Yesipova",
      "target": "A. Schnabel"
    }
  },
  {
    "data": {
      "source": "E. Mandyczewski",
      "target": "R. Scalero"
    }
  },
  {
    "data": {
      "source": "F. F\u00e9tis",
      "target": "J. Lemmens"
    }
  },
  {
    "data": {
      "source": "F. F\u00e9tis",
      "target": "C. Widor"
    }
  },
  {
    "data": {
      "source": "F. Busoni",
      "target": "O. Luening"
    }
  },
  {
    "data": {
      "source": "F. Busoni",
      "target": "E. Petri"
    }
  },
  {
    "data": {
      "source": "I. Thom\u00e1n",
      "target": "B. Bart\u00f3k"
    }
  },
  {
    "data": {
      "source": "I. Thom\u00e1n",
      "target": "F. Reiner"
    }
  },
  {
    "data": {
      "source": "D. Milhaud",
      "target": "K. Stockhausen"
    }
  },
  {
    "data": {
      "source": "D. Milhaud",
      "target": "S. Shifrin"
    }
  },
  {
    "data": {
      "source": "R. Gerhard",
      "target": "R. Reynolds"
    }
  },
  {
    "data": {
      "source": "R. Scalero",
      "target": "G. Menotti"
    }
  },
  {
    "data": {
      "source": "R. Scalero",
      "target": "L. Foss"
    }
  },
  {
    "data": {
      "source": "R. Scalero",
      "target": "G. Rochberg"
    }
  },
  {
    "data": {
      "source": "E. Guiraud",
      "target": "P. Dukas"
    }
  },
  {
    "data": {
      "source": "E. Guiraud",
      "target": "A. Gedalge"
    }
  },
  {
    "data": {
      "source": "P. Goetschius",
      "target": "B. Rogers"
    }
  },
  {
    "data": {
      "source": "P. Goetschius",
      "target": "H. Hanson"
    }
  },
  {
    "data": {
      "source": "P. Goetschius",
      "target": "H. Cowell"
    }
  },
  {
    "data": {
      "source": "F. Reiner",
      "target": "V. Persichetti"
    }
  },
  {
    "data": {
      "source": "M. Bauer",
      "target": "M. Babbitt"
    }
  },
  {
    "data": {
      "source": "L. Di\u00e9mer",
      "target": "L. L\u00e9vy"
    }
  },
  {
    "data": {
      "source": "L. Di\u00e9mer",
      "target": "V. d'Indy"
    }
  },
  {
    "data": {
      "source": "S. Jadassohn",
      "target": "F. Busoni"
    }
  },
  {
    "data": {
      "source": "H. Cowell",
      "target": "J. Cage"
    }
  },
  {
    "data": {
      "source": "R. Pelletier",
      "target": "C. Champagne"
    }
  },
  {
    "data": {
      "source": "F. Chopin",
      "target": "G. Mathias"
    }
  },
  {
    "data": {
      "source": "C. Reinecke",
      "target": "F. Busoni"
    }
  },
  {
    "data": {
      "source": "C. Reinecke",
      "target": "C. Stanford"
    }
  },
  {
    "data": {
      "source": "C. Reinecke",
      "target": "A. Micha\u0142owski"
    }
  },
  {
    "data": {
      "source": "G. Mathias",
      "target": "I. Philipp"
    }
  },
  {
    "data": {
      "source": "G. Mathias",
      "target": "P. Dukas"
    }
  },
  {
    "data": {
      "source": "C. Franck",
      "target": "V. d'Indy"
    }
  },
  {
    "data": {
      "source": "C. Franck",
      "target": "L. Vierne"
    }
  },
  {
    "data": {
      "source": "L. Niedermeyer",
      "target": "G. Faur\u00e9"
    }
  },
  {
    "data": {
      "source": "J. Joachim",
      "target": "J. Hubay"
    }
  },
  {
    "data": {
      "source": "J. Joachim",
      "target": "L. Auer"
    }
  },
  {
    "data": {
      "source": "J. Gallon",
      "target": "O. Messiaen"
    }
  },
  {
    "data": {
      "source": "J. Gallon",
      "target": "H. Dutilleux"
    }
  },
  {
    "data": {
      "source": "C. Stanford",
      "target": "C. Wood"
    }
  },
  {
    "data": {
      "source": "C. Stanford",
      "target": "R. Williams"
    }
  },
  {
    "data": {
      "source": "M. Babbitt",
      "target": "M. Davidovsky"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "E. Guiraud"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "R. Pelletier"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "T. Dubois"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "L. Di\u00e9mer"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "V. d'Indy"
    }
  },
  {
    "data": {
      "source": "A. Marmontel",
      "target": "A. Lavignac"
    }
  },
  {
    "data": {
      "source": "A. Micha\u0142owski",
      "target": "H. Neuhaus"
    }
  },
  {
    "data": {
      "source": "A. Schnabel",
      "target": "M. Curcio"
    }
  }
];

export default elements;