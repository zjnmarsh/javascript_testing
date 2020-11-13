class SIR_model {
    constructor(s0, i0, r0, beta, gamma, t) {
        console.log("Initial")
        this.s0 = s0
        this.i0 = i0
        this.r0 = r0
        this.beta = beta
        this.gamma = gamma
        this.time = t
        this.N = s0 + i0 + r0
    }

    equations(param) {
        let e = 0
        let S = param[0]
        let I = param[1]
        let R = param[2]
        let dsdt = (-(this.beta * S * I) / this.N) + (e * R)
        let didt = ((this.beta * S * I) / this.N) - this.gamma * I
        let drdt = (this.gamma * I) - (e * R)
        return [dsdt, didt, drdt]
    }

    solver() {
        console.log("Running solver")
        let param = [this.s0, this.i0, this.r0]  // don't really want a global variable
        // console.log(param)
        let solver_result = [[],[],[]]

        for (let i = 0; i < this.time; i++) {
            // console.log("Inside loop")
            // console.log(param)
            let eqns_results = this.equations(param)
            let x = param[0] + eqns_results[0]
            let y = param[1] + eqns_results[1]
            let z = param[2] + eqns_results[2]
            solver_result[0].push(x)
            solver_result[1].push(y)
            solver_result[2].push(z)
            param = [x, y, z]
        }
        return solver_result
    }

    main_function() {
        let N = this.s0 + this.i0 + this.r0
        let time_array = []
        for (let i=0; i < this.time+1; i++) {
            time_array.push(i)
        }

        let solver_result = this.solver()
        return solver_result
    }

}

// let sim_1 = new SIR_model(100,1,0,0.8,0.1,10)
// let result = sim_1.main_function()
// console.log(result)

module.exports = SIR_model
