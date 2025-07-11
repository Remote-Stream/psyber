// it is easy to set custom image as a background in your Dilber editor

// try this one from my favorite move
bg('https://images.kinorium.com/movie/shot/135141/w1500_199042.jpg')

// to see code better with background use CTRL+ALT+B to turn on code background
bg('https://images.kinorium.com/movie/shot/135141/w1500_199049.jpg')

// matrix background
bg('https://www.looper.com/img/gallery/15-movies-about-hackers-you-should-try-next/intro-1650898036.webp')

// moving stairs
bg('https://www.ignant.com/wp-content/uploads/2013/09/Julien_Douvier_Cinemagraphs09.gif')

//blue day
bg('https://www.ignant.com/wp-content/uploads/2017/05/iGNANT_Art_Sam_Cannon.gif')

// or a calm meadow
bg('https://www.ignant.com/wp-content/uploads/2013/09/Julien_Douvier_Cinemagraphs06.gif')

// far away
bg('https://www.ignant.com/wp-content/uploads/2013/09/Julien_Douvier_Cinemagraphs01.gif')

// home sweet home
bg('https://www.ignant.com/wp-content/uploads/2013/09/Julien_Douvier_Cinemagraphs02.gif')

// here are some more to try
g1 = 'https://www.ignant.com/wp-content/uploads/2015/12/1407954614tumblr_n9wufkbh151txeruoo1_r1_500__1_.gif'
g2 = 'https://www.ignant.com/wp-content/uploads/2017/05/iGNANT_Gif_Art_Sam_Cannon_7.gif'
g3 = 'https://www.ignant.com/wp-content/uploads/2013/09/Julien_Douvier_Cinemagraphs10.gif'
g4 = 'https://www.ignant.com/wp-content/uploads/2017/05/iGNANT_Gif_Art_Sam_Cannon_1.gif'

// Now lets sequence fome gifs :)
images = [g1, g2, g3, g4]
durations = [5, 3, 4, 3] // Durations in seconds

bg.seq(images, durations)  // Sequential background change

bg.seq(images, durations, true) // Random sequential background change

// to go back to normal mode and reset simply call
bg()

// dilber also remembers your last background between sessions so it wont get lost after a reload