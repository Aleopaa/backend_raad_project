db.tasks.drop();

db.tasks.insertMany([
    {
        id: 1,
        habit: 'Drink Water',
        comment: 'two liters a day'
    },
    {
        id: 2,
        habit: 'read book',
        comment: '10 pages a day'
    },
    {
        id: 3,
        habit: 'go outside',
        comment: '10 minutes a day'
    }
]);
