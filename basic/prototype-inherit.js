var print = console.log

function Employee() {
    this.name = "";
    this.dept = "";
    this.salary = 0.0;

}


function Manager() {
    Employee.call(this)
    this.reports = []
    this.getReports = function() {
        for (var i = 0; i < this.reports.length; i++) {
            print(this.reports[i])
        }
    }
}

Manager.prototype = Object.create(Employee.prototype);


function TeamLead() {
    Manager.call(this)
    this.dept = 'software'
    this.salary = 122200

}
TeamLead.prototype = Object.create(Manager.prototype)

var team = new TeamLead()
//Employee.prototype.name='AKKA'
print(team.dept);
print(team.salary);


team.reports.push('Austin')
team.reports.push('Rocky')
team.reports.push('Joe')

team.getReports()
print('===========')
team.reports.push('Leo')
team.getReports()
print(team.name)
