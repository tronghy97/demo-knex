import { PersonModel } from '../../models/person';

export const resolver = {
    Query: {
        getAllPersons: () => PersonModel.getAllPersons(),
        findPerson: (root, {id}) => PersonModel.findPerson(id)
    },
    Mutation: {
        createPerson(root, {input}){
            return PersonModel.createPerson(input);
        },
        insertPersons(root, {input}){
            return PersonModel.insertPersons(input);
        },
        updatePerson(root, {id, input}){
            if (id) {
                return PersonModel.updatePerson(id, input);
            }
            return null;
        }
    }
}