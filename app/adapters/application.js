import DS from 'ember-data';

// export default DS.FixtureAdapter.extend();
// here you can configure adapters per model or for whole application

export default DS.RESTAdapter.reopen({
  //reopens the class and tells app to look for api namespace for all data
  namespace: 'api'
});
