const billingCycle = require('./billingCycle')

billingCycle.methods(['get', 'post', 'put', 'delete'])
billingCycle.updateOptions({ new: true, runValidator: true })

billingCycle.route('count', (req, res, next) => {
    billingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

billingCycle.route('summary', (req, res, next) => {
    billingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

billingCycle.route('buscamongo', (req, res, next) => {
    billingCycle.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
})

module.exports = billingCycle