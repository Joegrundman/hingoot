const moment = require('moment')
const Immutable = require('immutable')
const expect = require('chai').expect
const core = require('../../app/rdx/core')
const List = Immutable.List
const Map = Immutable.Map

describe('application logic', () => {
    describe('initState', () => {
        it('initialises the state as an empty state tree', () => {
            const nextState = core.initState(null)

            expect(nextState).to.equal(List())
        })
    })

    describe('addEntry', () => {
        it('adds a new entry to the state', () => {
            const state = List.of(Map({place: "Boat House", votes: 1}))
            const nextState = core.addEntry(state, "The Railway")

            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 1}),
                Map({place: "The Railway", votes: 1})
            ))
        })
    })

    describe('incrementOrAddEntry', () => {
        it('should increment entry if it already exists', () => {
            const state = List.of(Map({
                place: "Boat House",
                votes: 2
            }))
            const nextState  = core.incrementOrAddEntry(state, "Boat House")
            expect(nextState).to.equal(List.of(Map({
                place: "Boat House",
                votes: 3
            })))
        })
        it('should add a new entry with 1 vote if not already present', () => {
             const state = List.of(Map({
                place: "Boat House",
                votes: 2
            }))     
            const nextState = core.incrementOrAddEntry(state, "The Gate")
            expect(nextState).to.equal(List.of(
                Map({
                    place: "Boat House",
                    votes: 2
            }),
                Map({
                    place: "The Gate",
                    votes: 1
                })
            ))      
        })

    })

    describe('deleteEntry', () => {
        it('removes an entry from the state', () => {
            const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
            )
            const nextState = core.deleteEntry(state, "The Railway")

            expect(nextState).to.equal(List.of(Map({place: "Boat House"})))
        })
        it('should return the state if the entry to be removed is not found', () => {
            const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway"})
            )

            const nextState = core.deleteEntry(state, "The Gate")
            expect(nextState).to.equal(state)
        })
    })

    describe('getEntryVotes', () => {
        it('gets the votes for an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )
            expect(core.getEntryVotes(state, "Boat House")).to.equal(3)
            expect(core.getEntryVotes(state, "The Railway")).to.equal(5)
        })
        it('should return 0 if the entry is not present', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )

            expect(core.getEntryVotes(state, "The Gate")).to.equal(0)          
        })
    })

    describe('increment', () => {
        it('increments the votes on an entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = core.increment(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 4}),
                Map({place: "The Railway", votes: 5})
            )   )     
        })

        it ('should add a single vote if there is no vote attribute', () => {
                const state = List.of(
                    Map({place: "Boat House"}),
                    Map({place: "The Railway", votes: 5})
                )      
                const nextState = core.increment(state, "Boat House") 
                expect(nextState).to.equal(List.of(
                    Map({place: "Boat House", votes: 1}),
                    Map({place: "The Railway", votes: 5})
                )   )   
        })

    })

    describe("decrement", () => {
        it('should decrement the votes for the relevant entry', () => {
           const state = List.of(
                Map({place: "Boat House", votes: 3}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = core.decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 2}),
                Map({place: "The Railway", votes: 5})
            )   ) 
        })
        it('should not decrement below zero', () => {
            const state = List.of(
                Map({place: "Boat House", votes: 0}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = core.decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 0}),
                Map({place: "The Railway", votes: 5})
            )   )            
        })
        it('should ignore if there is no vote attribute', () => {
            const state = List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway", votes: 5})
            )   
            const nextState = core.decrement(state, "Boat House")  
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House"}),
                Map({place: "The Railway", votes: 5})
            ))            
        })
    })

    describe("cleanUpStore", () => {

        const testDate = "2016-09-14T20:47:25.715Z"

        it("should remove all entries after midnight", () => {
            const state = List.of(
                Map({place: "Boat House", votes: 1, day: 15}),
                Map({place: "The Railway", votes: 5, day: 14})
            )
            const nextDay = new Date(testDate).getDate() + 1

            const nextState = core.cleanUpStore(state, nextDay)
            
            expect(nextState).to.equal(List.of(
                Map({place: "Boat House", votes: 1, day: 15})
            ))
        })

        it('should handle different timezones', () => {
 
            const state = List.of(
                Map({place: "Boat House", votes: 1, day: 14, tz: 10}),
                Map({place: "The Railway", votes: 5, day: 14, tz: 0, })
            )    
            const date = new Date(testDate)
            const nextDay = date.getDate()
            const hours = date.getHours()

            const nextState = core.cleanUpStore(state, nextDay, hours)
            expect(nextState).to.equal(List.of(
                Map({place: "The Railway", votes: 5, day: 14, tz: 0})
            ))         
        })

    })

})