'''
Mobility outcomes
    Education
        Absolute educational mobility in UK
        Relative absolute mobility in UK
        Absolute educational mobility - OECD comparison
        Relative educational mobility - OECD comparison
    Housing
        Absolute housing mobility - LFS
        Relative housing mobility - LFS
        Absolute housing mobility - LS
        Relative housing mobility - LS
    Income
        Relative income mobility - Rank-rank correlation - UKLHS
        Relative income mobility - Intergenerational elasticity - UKLHS
        Relative income mobility - Rank-rank correlation - LEO
        Relative income mobility - Intergenerational elasticity - LEO
    Occupation
        Absolute occupational mobility - LFS
        Relative occupational mobility - LFS
        Absolute occupational mobility - LS
        Relative occupational mobility - LS
        Absolute occupational mobility - Birth cohort studies
        Relative occupational mobility - Birth cohort studies
        Absolute occupational mobility - International comparison
        Relative occupational mobility - International comparison
    Wealth
        Absolute income mobility
        Relative wealth mobility

Age-related outcomes
    5 to 16 years
        Level of development at age 5
        Attainment at age 11
        Attainment at 16
        Skills at 15
    16 to 24 years
        Destinations following the end of compulsory full-time schooling
        Entry to higher education
        Highest qualification by age 25
        Skills in early adulthood
    25 to 29 years
        Economic activity
        Unemployment
        Occupational level
        Earnings
        Returns to education
    35 to 44 years
        Acquisition of further training and qualifications
        Occupational progression
        Income progression
        Class pay gap

Drivers of mobility
    Education opportunities
        Opportunities for post-16 further education and training
        Availability of high-quality school education
        Opportunities for access to higher education
        Availability of high-quality higher education
    Inequality among children
        Economic inequality between families with school-age children
        Childhood poverty
        Cultural inequality between families with school-age children
        Class inequality between families with school-age children
        Inequalities in child-rearing
    Social connections
        Civic engagement
        Environment conducive to entrepreneurship
    Work opportunities for young people
        Vacancy rate at entry level
        Youth unemployment
        Type of employment taken by young people
        Median earnings of young people
'''

menu = {
    'domains': [
        {
            'name': 'Mobility outcomes',
            'subdomains': [
                {
                    'name': 'Education',
                    'indicators': [
                        {
                            'id': 'MO11',
                            'name': 'Educational mobility (absolute)'
                        },
                        {
                            'id': 'MO12',
                            'name': 'Educational mobility (relative)'
                        },
                        {
                            'id': 'MO13',
                            'name': 'Educational mobility - international comparisons (absolute)'
                        },
                        {
                            'id': 'MO14',
                            'name': 'Educational mobility - international comparisons (relative)'
                        }
                    ]
                },
                {
                    'name': 'Occupation',
                    'indicators': [
                        {
                            'id': 'MO21',
                            'name': 'Occupational mobility (absolute)'
                        },
                        {
                            'id': 'MO22',
                            'name': 'Occupational mobility (relative)'
                        },
                        #{
                        #    'id': 'MO23',
                        #    'name': '[No data for SON23]'
                        #},
                        #{
                        #    'id': 'MO24',
                        #    'name': '[No data for SON23]'
                        #},
                        {
                            'id': 'MO25',
                            'name': 'Occupational mobility by year of birth (absolute)'
                        },
                        {
                            'id': 'MO26',
                            'name': 'Occupational mobility (relative, birth-cohort studies)'
                        },
                        {
                            'id': 'MO27',
                            'name': 'Occupational mobility - international comparisons (absolute)'
                        },
                        {
                            'id': 'MO28',
                            'name': 'Occupational mobility - international comparisons (relative)'
                        }
                    ]
                },
                {
                    'name': 'Housing',
                    'indicators': [
                        {
                            'id': 'MO31',
                            'name': 'Housing mobility (absolute)'
                        },
                        {
                            'id': 'MO32',
                            'name': 'Housing mobility (relative)'
                        },
                        #{
                        #    'id': 'MO33',
                        #    'name': '[No data for SON23]'
                        #},
                        #{
                        #    'id': 'MO34',
                        #    'name': '[No data for SON23]'
                        #}
                    ]
                },
                {
                    'name': 'Income',
                    'indicators': [
                        {
                            'id': 'MO41',
                            'name': 'Income mobility (relative, rank-rank correlation, UKHLS)'
                        },
                        {
                            'id': 'MO42',
                            'name': 'Income mobility (relative, intergenerational elasticity, UKHLS)'
                        },
                        {
                            'id': 'MO43',
                            'name': 'Income mobility (relative, rank-rank correlation, LEO)'
                        },
                        #{
                        #    'id': 'MO44',
                        #    'name': '[No data for SON23]'
                        #}
                    ]
                },
                {
                    'name': 'Wealth',
                    'indicators': [
                        {
                            'id': 'MO45',
                            'name': 'Income mobility (absolute)'
                        },
                        {
                            'id': 'MO51',
                            'name': 'Wealth mobility (relative)'
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Intermediate outcomes',
            'subdomains': [
                {
                    'name': '5 to 16 years',
                    'indicators': [
                        {
                            'id': 'IN11',
                            'name': 'Level of development at age 5'
                        },
                        {
                            'id': 'IN12',
                            'name': 'Attainment at age 11'
                        },
                        {
                            'id': 'IN13',
                            'name': 'Attainment at age 16'
                        },
                        {
                            'id': 'IN14',
                            'name': 'Skills at age 15'
                        }
                    ]
                },
                {
                    'name': '16 to 24 years',
                    'indicators': [
                        {
                            'id': 'IN21',
                            'name': 'Destinations after age 16'
                        },
                        {
                            'id': 'IN22',
                            'name': 'Entry to higher education'
                        },
                        {
                            'id': 'IN23',
                            'name': 'Highest qualification by age 25'
                        },
                        {
                            'id': 'IN24',
                            'name': 'Skills in early adulthood'
                        }
                    ]
                },
                {
                    'name': '25 to 29 years',
                    'indicators': [
                        {
                            'id': 'IN31',
                            'name': 'Economic activity'
                        },
                        {
                            'id': 'IN32',
                            'name': 'Unemployment'
                        },
                        {
                            'id': 'IN33',
                            'name': 'Occupational level'
                        },
                        {
                            'id': 'IN34',
                            'name': 'Earnings'
                        },
                        {
                            'id': 'IN35',
                            'name': 'Returns to education'
                        }
                    ]	
                },
                {
                    'name': '35 to 44 years',
                    'indicators': [
                        {
                            'id': 'IN41',
                            'name': 'Further training and qualifications'
                        },
                        {
                            'id': 'IN42',
                            'name': 'Occupational progression'
                        },
                        {
                            'id': 'IN43',
                            'name': 'Income progression'
                        },
                        {
                            'id': 'IN44',
                            'name': 'Class pay gap'
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Drivers of mobility',
            'subdomains': [
                {
                    'name': 'Inequality among children',
                    'indicators': [
                        {
                            'id': 'DR11',
                            'name': 'Distribution of earnings across families'
                        },
                        {
                            'id': 'DR12',
                            'name': 'Childhood poverty'
                        },
                        {
                            'id': 'DR13',
                            'name': 'Distribution of parental education'
                        },
                        {
                            'id': 'DR14',
                            'name': 'Class inequality among families with school-age children'
                        },
                        {
                            'id': 'DR15',
                            'name': 'Inequalities in child-rearing practices'
                        }
                    ]
                },
                {
                    'name': 'Educational opportunities',
                    'indicators': [
                        {
                            'id': 'DR21',
                            'name': 'Further education and training opportunities'
                        },
                        {
                            'id': 'DR22',
                            'name': 'Availability of high-quality school education'
                        },
                        {
                            'id': 'DR23',
                            'name': 'Access to higher education'
                        },
                        {
                            'id': 'DR24',
                            'name': 'Availability of high-quality higher education'
                        }
                    ]
                },
                {
                    'name': 'Work opportunities for young people',
                    'indicators': [
                        {
                            'id': 'DR31',
                            'name': 'Job vacancy rate'
                        },
                        {
                            'id': 'DR32',
                            'name': 'Youth unemployment'
                        },
                        {
                            'id': 'DR33',
                            'name': 'Occupational level of 25 to 29 year olds'
                        },
                        {
                            'id': 'DR34',
                            'name': 'Earnings of 22 to 29 year olds'
                        }
                    ]
                },
                {
                    'name': 'Social connections',
                    'indicators': [
                        {
                            'id': 'DR41',
                            'name': 'Civic engagement'
                        },
                        {
                            'id': 'DR42',
                            'name': 'Environment favouring entrepreneurship'
                        }
                    ]	
                }
            ]
        },
        {
            'name': 'Social mobility by area'
        }
    ]
}

_menu = {
    'domains': [
        {
            'name': 'Mobility outcomes',
            'subdomains': [
                {
                    'name': 'Education',
                    'indicators': [
                        {
                            'name': 'Absolute educational mobility in UK'
                        },
                        {
                            'name': 'Relative absolute mobility in UK'
                        },
                        {
                            'name': 'Absolute educational mobility - OECD comparison'
                        },
                        {
                            'name': 'Relative educational mobility - OECD comparison'
                        }
                    ]
                },
                {
                    'name': 'Housing',
                    'indicators': [
                        {
                            'name': 'Absolute housing mobility - LFS'
                        },
                        {
                            'name': 'Relative housing mobility - LFS'
                        },
                        {
                            'name': 'Absolute housing mobility - LS'
                        },
                        {
                            'name': 'Relative housing mobility - LS'
                        }
                    ]
                },
                {
                    'name': 'Income',
                    'indicators': [
                        {
                            'name': 'Relative income mobility - Rank-rank correlation - UKLHS'
                        },
                        {
                            'name': 'Relative income mobility - Intergenerational elasticity - UKLHS'
                        },
                        {
                            'name': 'Relative income mobility - Rank-rank correlation - LEO'
                        },
                        {
                            'name': 'Relative income mobility - Intergenerational elasticity - LEO'
                        }
                    ]
                },
                {
                    'name': 'Occupation',
                    'indicators': [
                        {
                            'name': 'Absolute occupational mobility - LFS'
                        },
                        {
                            'name': 'Relative occupational mobility - LFS'
                        },
                        {
                            'name': 'Absolute occupational mobility - LS'
                        },
                        {
                            'name': 'Relative occupational mobility - LS'
                        },
                        {
                            'name': 'Absolute occupational mobility - Birth cohort studies'
                        },
                        {
                            'name': 'Relative occupational mobility - Birth cohort studies'
                        },
                        {
                            'name': 'Absolute occupational mobility - International comparison'
                        },
                        {
                            'name': 'Relative occupational mobility - International comparison'
                        }
                    ]
                },
                {
                    'name': 'Wealth',
                    'indicators': [
                        {
                            'name': 'Absolute income mobility'
                        },
                        {
                            'name': 'Relative wealth mobility'
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Intermediate outcomes',
            'subdomains': [
                {
                    'name': '5 to 16 years',
                    'indicators': [
                        {
                            'name': 'Level of development at age 5'
                        },
                        {
                            'name': 'Attainment at age 11'
                        },
                        {
                            'name': 'Attainment at 16'
                        },
                        {
                            'name': 'Skills at 15'
                        }
                    ]
                },
                {
                    'name': '16 to 24 years',
                    'indicators': [
                        {
                            'name': 'Destinations following the end of compulsory full-time schooling'
                        },
                        {
                            'name': 'Entry to higher education'
                        },
                        {
                            'name': 'Highest qualification by age 25'
                        },
                        {
                            'name': 'Skills in early adulthood'
                        }
                    ]
                },
                {
                    'name': '25 to 29 years',
                    'indicators': [
                        {
                            'name': 'Economic activity'
                        },
                        {
                            'name': 'Unemployment'
                        },
                        {
                            'name': 'Occupational level'
                        },
                        {
                            'name': 'Earnings'
                        },
                        {
                            'name': 'Returns to education'
                        }
                    ]
                },
                {
                    'name': '35 to 44 years',
                    'indicators': [
                        {
                            'name': 'Acquisition of further training and qualifications'
                        },
                        {
                            'name': 'Occupational progression'
                        },
                        {
                            'name': 'Income progression'
                        },
                        {
                            'name': 'Class pay gap'
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Drivers of mobility',
            'subdomains': [
                {
                    'name': 'Education opportunities',
                    'indicators': [
                        {
                            'name': 'Opportunities for post-16 further education and training'
                        },
                        {
                            'name': 'Availability of high-quality school education'
                        },
                        {
                            'name': 'Opportunities for access to higher education'
                        },
                        {
                            'name': 'Availability of high-quality higher education'
                        }
                    ]
                },
                {
                    'name': 'Inequality among children',
                    'indicators': [
                        {
                            'name': 'Economic inequality between families with school-age children'
                        },
                        {
                            'name': 'Childhood poverty'
                        },
                        {
                            'name': 'Cultural inequality between families with school-age children'
                        },
                        {
                            'name': 'Class inequality between families with school-age children'
                        },
                        {
                            'name': 'Inequalities in child-rearing'
                        }
                    ]
                },
                {
                    'name': 'Social connections',
                    'indicators': [
                        {
                            'name': 'Civic engagement'
                        },
                        {
                            'name': 'Environment conducive to entrepreneurship'
                        }
                    ]
                },
                {
                    'name': 'Work opportunities for young people',
                    'indicators': [
                        {
                            'name': 'Vacancy rate at entry level'
                        },
                        {
                            'name': 'Youth unemployment'
                        },
                        {
                            'name': 'Type of employment taken by young people'
                        },
                        {
                            'name': 'Median earnings of young people'
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Social mobility by area'
        }
    ]
}


def url_link(link):
    return str(link).lower().replace(' ', '_')


def get_menu_tree(menu, selected):
    tree = []

    if 'domains' in menu:
        for domain in menu['domains']:
            if url_link(domain['name']) == url_link(selected):
                tree.append(domain['name'])
                break

            if 'subdomains' in domain:
                for subdomain in domain['subdomains']:
                    if url_link(subdomain['name']) == url_link(selected):
                        tree.append(domain['name'])
                        tree.append(subdomain['name'])
                        break

                    if 'indicators' in subdomain:
                        for indicator in subdomain['indicators']:
                            if url_link(indicator['name']) == url_link(selected):
                                tree.append(domain['name'])
                                tree.append(subdomain['name'])
                                tree.append(indicator['name'])
                                break

    return tree


def get_item_title(link):
    if 'domains' in menu:
        for domain in menu['domains']:
            if url_link(domain['name']) == url_link(link):
                return domain['name']

            if 'subdomains' in domain:
                for subdomain in domain['subdomains']:
                    if url_link(subdomain['name']) == url_link(link):
                        return subdomain['name']

                    if 'indicators' in subdomain:
                        for indicator in subdomain['indicators']:
                            if url_link(indicator['name']) == url_link(link):
                                return indicator['name']

    return ''
