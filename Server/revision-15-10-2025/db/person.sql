{
    persondId: '',
    name: '',
    phoneNumber, :'',
    gender: '',
    email : '',
    password: '',
    createdAt: new Date().now,


},
{
    roleID: Primary key,
    role: ['admin', 'buyer', 'seller'],
    roleDescription: '',
},
{
    personRoleID: '',
    personeID: foreign Key,
    roleID: foreign key,
}