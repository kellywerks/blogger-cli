module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      //simulates having an api endpoint
      'posts': [
        {
          id:1,
          title: 'Type B Negative or Positive?',
          body: 'I find a good unoaked O Negative to be much more palatable than its optimistic sibling -the heavier, more peppery O Positive.',
          user: 1
        },
        {
          id:2,
          title: 'Best Place to Get a Quick Bite to Eat',
          body: 'Head down to the waterfront to catch an early snack.',
          user: 2
        },
        {
          id: 3,
          title: 'Stain Removal 101',
          body: 'The best way to remove blood stains is with a little hydrogen peroxide and water.',
          user: 1
        }
      ],
      'users': [
        {
          id: 1,
          name: 'Lestat',
          posts: [1,3]
        },
        {
          id: 2,
          name: 'Edward',
          posts: [2]
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
