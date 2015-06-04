import DS from "ember-data";

var Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Post.reopenClass({
    FIXTURES: [
      {
        id:1,
        title: 'Type O Negative or Positive?',
        body: 'I find a good unoaked O Negative to be much more palatable than its optimistic sibling -the heavier, more peppery O Positive.'
      },
      {
        id:2,
        title: 'Best Place to Get a Pre-Sunrise Bite to Eat',
        body: 'Head down to the waterfront to catch an early snack.'
      },
      {
        id: 3,
        title: 'Stain Removal 101',
        body: 'The best way to remove blood stains is with a little hydrogen peroxide and water.'
      }
    ]
});

export default Post;
