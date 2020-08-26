const express = require('express')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const app = express()
const url = require('url')
var hbs = require('hbs');
const port = process.env.PORT || 8080;

hbs.registerHelper('helper_name', function(value) { 
  return value
});
hbs.registerPartial('partial_name', 'partial value');

app.set('view engine', '.hbs')

const StoryblokClient = require('storyblok-node-client')

let Storyblok = new StoryblokClient({
  privateToken: 'SKrQpvucQIgY2EZq7DHgrAtt'
})


/////////////////// HANDLEBARS HELPERS ////////////////////

///////////////// DON'T TOUCH /////////////////////

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  Storyblok
  .get('stories/home', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('index', {
      title: 'Home',
      landing_splash_image: storyContent.landing_splash_image,
      landing_splash_image_m: storyContent.landing_splash_image_m,
      landing_heading: storyContent.landing_heading,
      landing_quote: storyContent.landing_quote,
      sponsor_title: storyContent.sponsor_title,
      sponsor_description: storyContent.sponsor_description,
      sponsor_images: storyContent.sponsor_images,
      society_goals_title: storyContent.society_goals_title,
      society_goals: storyContent.society_goals,
      society_values_title: storyContent.society_values_title,
      society_values: storyContent.society_values,
      attribution: storyContent.attribution,
      cta_text: storyContent.call_to_action_text,
  })
  })
  .catch((error) => {
    console.log(error);
  });

})

app.get('/home', (req, res) => {
  res.redirect('/')
})

app.get('/index.html', (req, res) => {
  res.redirect('/')
})

app.get('/about', (req, res) => {
  Storyblok
  .get('stories/about', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('about', {
      title: "About Us",
      intro_title: storyContent.intro_title,
      intro: storyContent.intro,
      exec_team_title: storyContent.exec_team_title,
      sponsors_title: storyContent.sponsors_title,
      sponsors_image: storyContent.sponsors_image,
      sponsors_text: storyContent.sponsors_text,
      exec_profile: storyContent.exec_team_profiles,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/news-events', (req, res) => {
  Storyblok
  .get('stories/news-events', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('news-events', {
      title: "News & Events",
      event_slider: storyContent.event_slider,
      news_list: storyContent.news_list,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/careers', (req, res) => {
  Storyblok
  .get('stories/careers', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('careers', {
      title: "Careers",
      careers_list: storyContent.careers_list,
      // company_logo: storyContent.company_logo,
      // company_name: storyContent.company_name,
      // company_location: storyContent.company_location,
      // closing_date: storyContent.closing_date,
      // external_link: storyContent.external_link,
      // position_title: storyContent.position_title,
      // position_description: storyContent.position_description,
      // internal_link: storyContent.internal_link,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

////////////////// NEWS AND CAREERS ARTICLES //////////////////////

app.get('/news-article-test', (req, res) => {
  Storyblok
  .get('stories/news-article-test', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('news-article-test', {
      title: "News Article Test",
      article_title: storyContent.title,
      body: storyContent.body,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/career-test', (req, res) => {
  Storyblok
  .get('stories/career-test', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('career-test', {
      title: "Career Test",
      position_title: storyContent.position_title,
      company_logo: storyContent.company_logo,
      company_name: storyContent.company_name,
      company_location: storyContent.company_location,
      closing_date: storyContent.closing_date,
      employment_type: storyContent.employment_type,
      remuneration: storyContent.remuneration,
      commences: storyContent.commences,
      external_link: storyContent.external_link,
      position_description: storyContent.position_description,
      how_to_apply: storyContent.how_to_apply,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

////////////////// NEWS AND CAREERS ARTICLES //////////////////////

app.get('/newsletters', (req, res) => {
  Storyblok
  .get('stories/newsletters', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    console.log(storyContent.newsletter_list)
    res.render('newsletters', {
      title: "Newsletters",
      newsletter_list: storyContent.newsletter_list,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/resources', (req, res) => {
  Storyblok
  .get('stories/resources', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('resources', {
      title: "Resources",
      resource_list: storyContent.resource_list,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/sign-up', (req, res) => {
  Storyblok
  .get('stories/sign-up', {
    version: 'published'
  })
  .then((response) => {
    var storyContent = response.body.story.content;
    res.render('sign-up', {
      title: "Sign Up!",
      form_iframe: storyContent.form_iframe,
  })
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/*', function(req, res) {
  var path = url.parse(req.url).pathname
  path = path == '/' ? 'home' : path

  Storyblok
    .get(`stories/${path}`, {
      version: req.query._storyblok ? 'draft': 'published'
    })
    .then((response) => {
      res.render('index', {
        story: response.body.story,
        params: req.query
      })
    })
    .catch((error) => {
      console.log(error)
      if (error.statusCode == 404) {
        res.render('404', {
          title: "404 Error"
        })
      } else if (error.statusCode !== 404) {
        res.send('A ' + error.statusCode.toString() + ' error ocurred')
      }
    })
})


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/components/'
}))

app.set('view engine', '.hbs')
app.set('views', 'views')

app.listen(port, function() {
  console.log('Listening on port 8080! Insert localhost:8080 in Storyblok')
})
