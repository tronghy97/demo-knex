export const typeDef = `
    extend type Query {
        getAllPersons: [Person],
        findPerson(id: ID): Person
    }

    extend type Mutation {
        createPerson(input: PersonInput): Person
        insertPersons(input: [PersonInput]): Boolean
        updatePerson(id: ID!, input: PersonInput): Person
    }

    input PersonInput{
        name: String,
        age: String,
        gender: String,
        role_name: String
    }
    
    type Person {
        id: ID,
        name: String,
        age: String,
        gender: String,
        role: Role
    }
`;