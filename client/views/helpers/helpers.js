Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('MM-dd-yyyy');
});
