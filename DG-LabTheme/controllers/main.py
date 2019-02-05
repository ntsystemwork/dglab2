from odoo import http, models, fields, _
from odoo.addons.portal.controllers.web import Home
from odoo.http import request


class WebsiteMainUser(Home):

    @http.route('/main/signuser', type='http', auth="public", website=True)
    def website_mainuser(self, **kwargs):
        return request.render('Abogados7x24Rew.MAINSIGNUSER', {})
