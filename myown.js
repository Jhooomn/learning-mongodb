db.createUser(
    {
        user: 'Jhooomn',
        pwd: '1234',
        roles: ['readWrite', 'dbAdmin']
    }
);

db.user.insert(
    [{
        username: 'Ana',
        password: '678'

    },
    {
        username: 'Camila',
        password: '568'
    }]
);

db.user.find(
    {
        _id: ObjectId("5d2f1d2687b95908a0de3abc")
    }
);

db.user.update(
    {
        _id: ObjectId("5d2f1d2687b95908a0de3abc")
    },
    {
        $set: { password: '666' }
    }
);

db.user.insert(
    [{
        username: 'Carlos',
        password: '672'

    },
    {
        username: 'Rina',
        password: '724'
    }]
);

db.user.remove(
    {
        _id: ObjectId("5d2f1e4287b95908a0de3ac0")
    }
);

db.user.find(
    {
        username: { $regex: 'ila' }
    }
);

db.user.update(
    {
        _id: ObjectId("5d2f1d5387b95908a0de3abe")
    },
    {
        $set: { age: 19 }
    }
);

db.user.update(
    {
        _id: ObjectId("5d2f1d5387b95908a0de3abe")
    },
    {
        $unset: { age: 1 }
    }
);

db.user.update(
    {
        _id: ObjectId("5d2f1d5387b95908a0de3abe")
    },
    {
        $inc: { age: 10 }
    }
);

db.user.insert(
    [
        {
            username: 'Jorge',
            age: 20
        },
        {
            username: 'Maria',
            age: 30
        },
        {
            username: 'Jose',
            age: 81
        },
    ]
);

db.user.find(
    {
        age: { $gt: 29 }
    }
);

db.user.find(
    {
        age: { $lt: 30 }
    }
);