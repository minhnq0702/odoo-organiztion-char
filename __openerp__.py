{
    'name': 'Organization Chart Test',
    'version': '10.0',
    'summary': 'Organization chart',
    'category': 'Tools',
    'description':
        """
OpenERP Organization Chart
=================

A wonderful application to organization chart.
        """,
    'data': [
        "views/organization_chart.xml",
    ],
    'depends': ['web'],
    'qweb': ['static/src/xml/*.xml'],
    'application': True,
}
