//1

class Worker {
    static countWorker = 0
    static countSalary = []
    static workersList = []
    static id = 1001
    constructor(name, category, salary=0){
        this.id = Worker.id
        this.name = name;
        this.category = category;
        this.salary = salary;
        Worker.countWorker++
        Worker.id++
        Worker.countSalary.push(this.salary)
        Worker.workersList.push(this)
    }
    outInfoSalary(){
        return `The employee's salary ${this.salary}$`
    }
    outSalaryPerYear(){
        let salaryWorker = this.salary
        return `Employee's salary per year ${salaryWorker*=12}$`
    }
    outCountWorker(){
        return `Amount of workers ${Worker.countWorker}`
    }
    outCountSalaryPerYear(){
        let salaryWorkers = Worker.countSalary.reduce((a,b) => a+b)
        return `Yes, we are hard workers ${salaryWorkers*=12}$`
    }
    outCountSalaryPerYear2(){
        let test = Worker.workersList
        let countSalary = []
        test.forEach(el => {
            Object.keys(el).forEach(key => {
                if(key=='salary') countSalary.push(el[key])
            })
        })
        let salaryWorkers = countSalary.reduce((a,b) => a+b)
        return `Yes, we are hard workers ${salaryWorkers*=12}$`
    }
}

//2

class JointWorker extends Worker {
    static countJointWorker = 0
    constructor(name, category, bid, hoursWorked){
        super(name, category);
        this.bid = bid;
        this.hoursWorked = hoursWorked;
        JointWorker.countJointWorker++
    }
    outSalaryPerDay(){
        let salaryDay = this.bid;
        return `Wage per day is ${salaryDay*=this.hoursWorked}`
    }
    salaryPerMonth(){
        let bid = this.bid
        let salaryDay = bid*=this.hoursWorked
        let salary = salaryDay*=24
        this.salary = salary
        Worker.countSalary.push(this.salary)
    }
    outCountJointWorker(){
        return `Amount of part-time workers ${JointWorker.countJointWorker}`
    }
}

const worker1 = new Worker('Chris', 'Chase', 860)
console.group('==================>')
console.log(worker1)
console.log(worker1.outInfoSalary())
console.log(worker1.outSalaryPerYear())
console.groupEnd()

const worker2 = new Worker('RaRa', 'Chase', 910)
console.group('==================>')
console.log(worker2)
console.log(worker2.outInfoSalary())
console.log(worker2.outSalaryPerYear())
console.groupEnd()

const worker3 = new Worker('Malva', 'Moiva', 770)
console.group('==================>')
console.log(worker3)
console.log(worker3.outInfoSalary())
console.log(worker3.outSalaryPerYear())
console.groupEnd()

console.group('========TOTAL==========>')
console.log(worker1.outCountWorker())
console.log(worker1.outCountSalaryPerYear())
console.groupEnd()

//================================================================

const jointWorker1 = new JointWorker('RulET', 'Rururerity', 6, 8)
console.group('==================>')
console.log(jointWorker1)
jointWorker1.salaryPerMonth()
console.log(jointWorker1.outSalaryPerDay())
console.log(jointWorker1.outInfoSalary())
console.log(jointWorker1.outSalaryPerYear())
console.groupEnd()

const jointWorker2 = new JointWorker('Moiva', 'Momoivava', 3, 8)
console.group('==================>')
console.log(jointWorker2)
jointWorker2.salaryPerMonth()
console.log(jointWorker2.outSalaryPerDay())
console.log(jointWorker2.outInfoSalary())
console.log(jointWorker2.outSalaryPerYear())
console.groupEnd()

console.group('========TOTAL==========>')
console.log(worker1.outCountWorker())
console.log(worker1.outCountSalaryPerYear())
console.log(jointWorker1.outCountJointWorker())
console.groupEnd()

console.group('========!!!!!!==========>')
console.log(worker1.outCountSalaryPerYear2())
console.groupEnd()