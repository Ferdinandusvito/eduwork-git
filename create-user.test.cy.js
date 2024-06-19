describe('Create new user', () =>{
    it('Should add new User', () => {
        var user = {
            "name": 'Vito',
            "job": 'Director'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) =>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        });
    });
});