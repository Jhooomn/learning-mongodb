db.createUser({
    user: 'Jhooomn',
    pwd: '1234',
    roles: ['readWrite', 'dbAdmin']
});

db.clientes.insert({
    firstname: 'Isaac',
    lastname: 'Asimov',
})

db.clientes.insert([
    { firstname: 'Andres', lastname: 'Garcia' },
    { firstname: 'Juan', lastname: 'Ruiz' },
    { firstname: 'Sandra', lastname: 'Aguilar' }
]);

db.clientes.find({ firstname: 'Isaac' });

db.clientes.update(
    {
        lastname: 'Asimov'
    },
    {
        firstname: 'Isaac',
        lastname: 'Asimov',
        gender: 'Male'
    }
);

db.clientes.update(
    {
        lastname: 'Oconner'
    },
    {
        firstname: 'Isaac',
        lastname: 'Oconner'
    }
);

db.clientes.find(
    { _id: ObjectId('5d2e8d8473e1d2b5bc018bbe') }
);

db.clientes.update(
    {
        _id: ObjectId('5d2e8d8473e1d2b5bc018bbe')
    },
    {
        firstname: 'Isaac',
        lastname: 'Oconner',
        gender: 'Male'
    }
);

db.clientes.update(
    {
        _id: ObjectId('5d2e8d8473e1d2b5bc018bbe')
    },
    {
        $set: { age: 45 }
    }
);

db.clientes.update(
    {
        _id: ObjectId('5d2e8d8473e1d2b5bc018bbe')
    },
    {
        $inc: { age: 5 }
    }
);

db.clientes.update(
    {
        _id: ObjectId('5d2e8d8473e1d2b5bc018bbe')
    },
    {
        $unset: { age: 1 }
    }
);

db.clientes.update(
    {
        firstname: 'Aaron'
    },
    {
        firstname: 'Aaron',
        lastname: 'Baron'
    },
    {
        upsert: true
    }
);

db.clientes.update(
    {
        firstname: 'Aaron'
    },
    {
        $rename: { 'firstname': 'primerNombre' }
    }
);

db.clientes.remove(
    {
        primerNombre: 'Aaron'
    }
);

db.clientes.remove(
    {
        firstname: 'Isaac'
    },
    {
        justOne: true
    }
);

db.clientes.find(
    {
        $or: [{ firstname: 'Juan' }, { firstname: 'Carlos' }]
    }
);

db.clientes.find(
    {
        gender: 'Male'
    }
);

db.clientes.insert(
    [
        {
            firstname: 'Jorge',
            age: 20
        },
        {
            firstname: 'Maria',
            age: 30
        },
        {
            firstname: 'Jose',
            age: 81
        },
    ]
);

db.clientes.find(
    {
        age: { $gt: 30 }
    }
);
db.clientes.find(
    {
        age: { $gt: 14 }
    }
);

db.clientes.find(
    {
        age: { $lt: 30 }
    }
);

db.clientes.find(
    {
        age: { $gt: 18, $lt: 30 }
    }
);

db.clientes.find(
    {
        "addres.city": 'London'
    }
)

db.clientes.insert(
    {
        firstname: 'Zack',
        addres: {
            city: 'London'
        }
    }
);

db.clientes.find({
    "addres.city": 'London'
});

db.clientes.find(
    {
        firstname: { $regex: 'orge' }
    }
);

db.clientes.find().sort(
    {
        firstname: 1
    }
);

db.clientes.find().sort(
    {
        firstname: -1
    }
);

db.clientes.count()

db.clientes.find(
    {
        age: { $gt: 18 }
    }
).count()

db.clientes.find().limit(3);
db.clientes.find().limit(3).sort(
    {
        lastname: -1
    }
);

db.clientes.find().forEach(function (doc) {
    print(doc.firstname)
}
);