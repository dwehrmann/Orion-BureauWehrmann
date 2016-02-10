orion.addEntity('works', {
	image: orion.attribute('file',{
		label: "Featured Image or specify a color fallback",
		optional: true
	}),
	companyLogo: orion.attribute('file',{
		label: "Upload a company logo if one exist or is of high enough quality (png)",
		optional: true
	}),
  sortOrder: {
    type: String,
    label: "Order",
  },
	projectBackground: {
		type: String,
		label: "Background Color",
		optional: true,
		autoform: {
			type: 'color',
		}
	},
	projectColor: {
		type: String,
		label: "Text Color",
		optional: true,
		autoform: {
			type: 'color',
		}
	},
  projectName: {
    type: String,
    label: "Project Name",
  },
	slug: {
		type: String,
		label: "Slug",
		optional: true
	},
	projectRole: {
		type: String,
		label: "Project Role"
	},
  projectLink: {
    type: String,
    label: "Project Link",
		optional: true
  },
	detailText: orion.attribute('summernote',{
		label: "Detail Text",
		optional: true
	}),
	 DetailImage1: orion.attribute('file',{
		label: "Detail Image 1",
		optional: true
	}),
  DetailImage1Text: {
		type: String,
		label: "Text 1",
		optional: true
	},
  DetailImage2: orion.attribute('file',{
		label: "Detail Image 2",
		optional: true
	}),
  DetailImage2Text: {
		type: String,
		label: "Text 2",
		optional: true
	},
  DetailImage3: orion.attribute('file',{
		label: "Detail Image 3",
		optional: true
	}),
  DetailImage3Text: {
		type: String,
		label: "Text 3",
 		optional: true
	},
  DetailImage4: orion.attribute('file',{
		label: "Detail Image 4",
		optional: true
	}),
  DetailImage4Text: {
		type: String,
		label: "Text 4",
		optional: true
	},

}, {
	sidebarName: 'Works',
	pluralName: 'Works',
	singularName: 'Work',
	tableColumns: [
		{data:'projectName', title: 'Project'},
	]
});
