module.exports = {
    getHomepage: async(req, res) => {
        res.render('pages/member/homemember');
    },

    getCalcost: async(req, res) => {
        res.render('pages/member/calcost');
    },
    getConclude: async(req, res) => {
        res.render('pages/member/conclude');
    },
    getContactfrommember: async(req, res) => {
        res.render('pages/member/contactfrommember');
    },
    getGraph: async(req, res) => {
        res.render('pages/member/graph');
    },
    getHarvest: async(req, res) => {
        res.render('pages/member/harvest');
    },
    getListmember: async(req, res) => {
        res.render('pages/member/listmember');
    },
    getRecord: async(req, res) => {
        res.render('pages/member/record');
    },
    getReportfrommember: async(req, res) => {
        res.render('pages/member/reportfrommember');
    }

}