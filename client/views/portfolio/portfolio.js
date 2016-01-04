Template.portfolio.helpers({
    works: function () {
      return orion.entities.works.collection.find().fetch();
    }
});
