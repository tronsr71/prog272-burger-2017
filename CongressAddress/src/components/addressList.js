const unknown = 'unknown';
const addresses = [
  {
    firstName: 'javascriptUnknown',
    lastName: 'javascriptUnknown',
    street: unknown,
    city: unknown,
    state: unknown,
    zip: unknown,
    phone: unknown,
    website: unknown,
    email: unknown,
    contact: unknown
  },
  {
    firstName: 'Patty',
    lastName: 'Murray',
    street: '915 2nd Avenue',
    city: 'Seattle',
    state: 'WA',
    zip: '98174',
    phone: '206-553-5545',
    website: 'www.murray.senate.gov',
    email: 'pmurray@gmail.com',
    contact: 'http://some-office.gov'
  },
  {
    firstName: 'Lamar',
    lastName: 'Alexander',
    street: '455 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'TN',
    zip: '20510',
    phone: '202-224-4944',
    website: 'https://www.alexander.senate.gov/public',
    email: 'lamar.alexander@tn.senate.gov',
    contact: 'http://www.alexander.senate.gov/public/index.cfm?p=Email'
  },
  {
    firstName: 'Roger',
    lastName: 'Wicker',
    street: '555 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'MS',
    zip: '20510',
    phone: '202-224-6253',
    website: 'https://www.wicker.senate.gov',
    email: 'roger.f.wicker@ms.senate.gov',
    contact: 'https://www.wicker.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Timothy',
    lastName: 'Kaine',
    street: '231 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'VA',
    zip: '20510',
    phone: '202-224-4024',
    website: 'https://www.kaine.senate.gov',
    email: 'timothy.kaine@va.senate.gov',
    contact: 'https://www.kaine.senate.gov/contact'
  },
  {
    firstName: 'Ted',
    lastName: 'Cruz',
    street: '404 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20510',
    phone: '202-224-5922',
    website: 'https://www.cruz.senate.gov',
    email: 'ted.cruz@tx.senate.gov',
    contact: 'http://www.cruz.senate.gov/?p=email_senator'
  },
  {
    firstName: 'Deb',
    lastName: 'Fischer',
    street: '454 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'NE',
    zip: '20510',
    phone: '202-224-6551',
    website: 'https://www.fischer.senate.gov',
    email: 'deb.fischer@ne.senate.gov',
    contact: 'http://www.fischer.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Heidi',
    lastName: 'Heitkamp',
    street: '516 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'ND',
    zip: '20510',
    phone: '202-224-2043',
    website: 'https://www.heitkamp.senate.gov/public',
    email: 'heidi.heitkamp@nd.senate.gov',
    contact: 'http://www.heitkamp.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Angus',
    lastName: 'King',
    street: '133 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'ME',
    zip: '20510',
    phone: '202-224-5344',
    website: 'https://www.king.senate.gov',
    email: 'angus.king@me.senate.gov',
    contact: 'https://www.king.senate.gov/contact'
  },
  {
    firstName: 'Elizabeth',
    lastName: 'Warren',
    street: '317 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MA',
    zip: '20510',
    phone: '202-224-4543',
    website: 'https://www.warren.senate.gov',
    email: 'elizabeth.warren@ma.senate.gov',
    contact: 'https://www.warren.senate.gov/?p=email_senator'
  },
  {
    firstName: 'Joe',
    lastName: 'Manchin',
    street: '306 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'WV',
    zip: '20510',
    phone: '202-224-3954',
    website: 'https://www.manchin.senate.gov/public',
    email: 'joe.manchin@wv.senate.gov',
    contact: 'http://www.manchin.senate.gov/public/index.cfm/contact-form'
  },
  {
    firstName: 'Martin',
    lastName: 'Heinrich',
    street: '303 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NM',
    zip: '20510',
    phone: '202-224-5521',
    website: 'https://www.heinrich.senate.gov',
    email: 'martin.heinrich@nm.senate.gov',
    contact: 'http://www.heinrich.senate.gov/contact'
  },
  {
    firstName: 'John',
    lastName: 'Barrasso',
    street: '307 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'WY',
    zip: '20510',
    phone: '202-224-6441',
    website: 'https://www.barrasso.senate.gov',
    email: 'john.a.barrasso@wy.senate.gov',
    contact: 'https://www.barrasso.senate.gov/public/index.cfm/contact-form'
  },
  {
    firstName: 'Bob',
    lastName: 'Corker',
    street: '425 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'TN',
    zip: '20510',
    phone: '202-224-3344',
    website: 'https://www.corker.senate.gov',
    email: 'bob.corker@tn.senate.gov',
    contact: 'https://www.corker.senate.gov/public/index.cfm/emailme'
  },
  {
    firstName: 'Sheldon',
    lastName: 'Whitehouse',
    street: '530 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'RI',
    zip: '20510',
    phone: '202-224-2921',
    website: 'https://www.whitehouse.senate.gov',
    email: 'sheldon.whitehouse@ri.senate.gov',
    contact: 'https://www.whitehouse.senate.gov/contact/email-sheldon'
  },
  {
    firstName: 'Robert',
    lastName: 'Casey',
    street: '393 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'PA',
    zip: '20510',
    phone: '202-224-6324',
    website: 'https://www.casey.senate.gov',
    email: 'robert.p.casey@pa.senate.gov',
    contact: 'https://www.casey.senate.gov/contact/'
  },
  {
    firstName: 'Jon',
    lastName: 'Tester',
    street: '311 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MT',
    zip: '20510',
    phone: '202-224-2644',
    website: 'https://www.tester.senate.gov',
    email: 'jon.tester@mt.senate.gov',
    contact: 'https://www.tester.senate.gov/?p=email_senator'
  },
  {
    firstName: 'Claire',
    lastName: 'McCaskill',
    street: '503 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MO',
    zip: '20510',
    phone: '202-224-6154',
    website: 'https://www.mccaskill.senate.gov',
    email: 'claire.mccaskill@mo.senate.gov',
    contact: 'http://www.mccaskill.senate.gov/contact'
  },
  {
    firstName: 'Amy',
    lastName: 'Klobuchar',
    street: '302 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MN',
    zip: '20510',
    phone: '202-224-3244',
    website: 'https://www.klobuchar.senate.gov',
    email: 'amy.j.klobuchar@mn.senate.gov',
    contact: 'http://www.klobuchar.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Kirsten',
    lastName: 'Gillibrand',
    street: '478 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'NY',
    zip: '20510',
    phone: '202-224-4451',
    website: 'https://www.gillibrand.senate.gov',
    email: 'kirsten.e.gillibrand@ny.senate.gov',
    contact: 'http://www.gillibrand.senate.gov/contact/'
  },
  {
    firstName: 'Dean',
    lastName: 'Heller',
    street: '324 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NV',
    zip: '20510',
    phone: '202-224-6244',
    website: 'https://www.heller.senate.gov/public',
    email: 'dean.heller@nv.senate.gov',
    contact: 'http://www.heller.senate.gov/public/index.cfm/contact-form'
  },
  {
    firstName: 'Joe',
    lastName: 'Donnelly',
    street: '720 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'IN',
    zip: '20510',
    phone: '202-224-4814',
    website: 'https://www.donnelly.senate.gov',
    email: 'joe.donnelly@in.senate.gov',
    contact: 'https://www.donnelly.senate.gov/contact/email-joe'
  },
  {
    firstName: 'Mazie',
    lastName: 'Hirono',
    street: '730 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'HI',
    zip: '20510',
    phone: '202-224-6361',
    website: 'https://www.hirono.senate.gov',
    email: 'mazie.k.hirono@hi.senate.gov',
    contact: 'https://www.hirono.senate.gov/contact'
  },
  {
    firstName: 'Christopher',
    lastName: 'Murphy',
    street: '136 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'CT',
    zip: '20510',
    phone: '202-224-4041',
    website: 'https://www.murphy.senate.gov',
    email: 'christopher.s.murphy@ct.senate.gov',
    contact: 'http://www.murphy.senate.gov/contact'
  },
  {
    firstName: 'Debbie',
    lastName: 'Stabenow',
    street: '731 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MI',
    zip: '20510',
    phone: '202-224-4822',
    website: 'https://www.stabenow.senate.gov',
    email: 'debbie.a.stabenow@mi.senate.gov',
    contact: 'http://www.stabenow.senate.gov/?p=contact'
  },
  {
    firstName: 'Bill',
    lastName: 'Nelson',
    street: '716 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'FL',
    zip: '20510',
    phone: '202-224-5274',
    website: 'https://www.billnelson.senate.gov',
    email: 'bill.nelson@fl.senate.gov',
    contact: 'https://www.billnelson.senate.gov/contact-bill'
  },
  {
    firstName: 'Orrin',
    lastName: 'Hatch',
    street: '104 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'UT',
    zip: '20510',
    phone: '202-224-5251',
    website: 'http://www.hatch.senate.gov',
    email: 'orrin.g.hatch@ut.senate.gov',
    contact: 'http://www.hatch.senate.gov/public/index.cfm/contact?p=Email-Orrin'
  },
  {
    firstName: 'Dianne',
    lastName: 'Feinstein',
    street: '331 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'CA',
    zip: '20510',
    phone: '202-224-3841',
    website: 'https://www.feinstein.senate.gov',
    email: 'dianne.feinstein@ca.senate.gov',
    contact: 'https://www.feinstein.senate.gov/public/index.cfm/e-mail-me'
  },
  {
    firstName: 'Thomas',
    lastName: 'Carper',
    street: '513 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'DE',
    zip: '20510',
    phone: '202-224-2441',
    website: 'https://www.carper.senate.gov/public',
    email: 'thomas.r.carper@de.senate.gov',
    contact: 'http://www.carper.senate.gov/public/index.cfm/email-senator-carper'
  },
  {
    firstName: 'Maria',
    lastName: 'Cantwell',
    street: '511 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'WA',
    zip: '20510',
    phone: '202-224-3441',
    website: 'https://www.cantwell.senate.gov',
    email: 'maria.cantwell@wa.senate.gov',
    contact: 'http://www.cantwell.senate.gov/public/index.cfm/email-maria'
  },
  {
    firstName: 'Bernard',
    lastName: 'Sanders',
    street: '332 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'VT',
    zip: '20510',
    phone: '202-224-5141',
    website: 'https://www.sanders.senate.gov',
    email: 'bernard.sanders@vt.senate.gov',
    contact: 'http://www.sanders.senate.gov/contact/'
  },
  {
    firstName: 'Robert',
    lastName: 'Menéndez',
    street: '528 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NJ',
    zip: '20510',
    phone: '202-224-4744',
    website: 'https://www.menendez.senate.gov',
    email: 'robert.menéndez@nj.senate.gov',
    contact: 'https://www.menendez.senate.gov/contact'
  },
  {
    firstName: 'Jeff',
    lastName: 'Flake',
    street: '413 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'AZ',
    zip: '20510',
    phone: '202-224-4521',
    website: 'https://www.flake.senate.gov/public',
    email: 'jeff.flake@az.senate.gov',
    contact: 'https://www.flake.senate.gov/public/index.cfm/contact-jeff'
  },
  {
    firstName: 'Benjamin',
    lastName: 'Cardin',
    street: '509 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MD',
    zip: '20510',
    phone: '202-224-4524',
    website: 'https://www.cardin.senate.gov',
    email: 'benjamin.l.cardin@md.senate.gov',
    contact: 'http://www.cardin.senate.gov/contact/'
  },
  {
    firstName: 'Sherrod',
    lastName: 'Brown',
    street: '713 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'OH',
    zip: '20510',
    phone: '202-224-2315',
    website: 'https://www.brown.senate.gov',
    email: 'sherrod.brown@oh.senate.gov',
    contact: 'http://www.brown.senate.gov/contact/'
  },
  {
    firstName: 'Tammy',
    lastName: 'Baldwin',
    street: '709 Hart',
    city: 'Washington DC',
    state: 'WI',
    zip: '20510',
    phone: '202-224-5653',
    website: 'https://www.baldwin.senate.gov',
    email: 'tammy.baldwin@wi.senate.gov',
    contact: 'https://www.baldwin.senate.gov/feedback'
  },
  {
    firstName: 'Thad',
    lastName: 'Cochran',
    street: '113 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'MS',
    zip: '20510',
    phone: '202-224-5054',
    website: 'https://www.cochran.senate.gov',
    email: 'thad.cochran@ms.senate.gov',
    contact: 'https://www.cochran.senate.gov/public/index.cfm/email-me'
  },
  {
    firstName: 'Susan',
    lastName: 'Collins',
    street: '413 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'ME',
    zip: '20510',
    phone: '202-224-2523',
    website: 'http://www.collins.senate.gov',
    email: 'susan.m.collins@me.senate.gov',
    contact: 'http://www.collins.senate.gov/contact'
  },
  {
    firstName: 'John',
    lastName: 'Cornyn',
    street: '517 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20510',
    phone: '202-224-2934',
    website: 'https://www.cornyn.senate.gov',
    email: 'john.cornyn@tx.senate.gov',
    contact: 'https://www.cornyn.senate.gov/contact'
  },
  {
    firstName: 'Richard',
    lastName: 'Durbin',
    street: '711 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'IL',
    zip: '20510',
    phone: '202-224-2152',
    website: 'https://www.durbin.senate.gov',
    email: 'richard.j.durbin@il.senate.gov',
    contact: 'https://www.durbin.senate.gov/contact/'
  },
  {
    firstName: 'Michael',
    lastName: 'Enzi',
    street: '379a Russell Senate Office Building',
    city: 'Washington DC',
    state: 'WY',
    zip: '20510',
    phone: '202-224-3424',
    website: 'https://www.enzi.senate.gov',
    email: 'michael.b.enzi@wy.senate.gov',
    contact: 'http://www.enzi.senate.gov/public/index.cfm/contact?p=e-mail-senator-enzi'
  },
  {
    firstName: 'Lindsey',
    lastName: 'Graham',
    street: '290 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'SC',
    zip: '20510',
    phone: '202-224-5972',
    website: 'https://www.lgraham.senate.gov/public',
    email: 'lindsey.o.graham@sc.senate.gov',
    contact: 'https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham'
  },
  {
    firstName: 'James',
    lastName: 'Inhofe',
    street: '205 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'OK',
    zip: '20510',
    phone: '202-224-4721',
    website: 'https://www.inhofe.senate.gov',
    email: 'james.m.inhofe@ok.senate.gov',
    contact: 'https://www.inhofe.senate.gov/contact'
  },
  {
    firstName: 'Mitch',
    lastName: 'McConnell',
    street: '317 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'KY',
    zip: '20510',
    phone: '202-224-2541',
    website: 'https://www.mcconnell.senate.gov',
    email: 'mitch.mcconnell@ky.senate.gov',
    contact: 'http://www.mcconnell.senate.gov/public/index.cfm?p=contact'
  },
  {
    firstName: 'John',
    lastName: 'Reed',
    street: '728 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'RI',
    zip: '20510',
    phone: '202-224-4642',
    website: 'https://www.reed.senate.gov',
    email: 'john.f.reed@ri.senate.gov',
    contact: 'https://www.reed.senate.gov/contact/'
  },
  {
    firstName: 'Pat',
    lastName: 'Roberts',
    street: '109 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'KS',
    zip: '20510',
    phone: '202-224-4774',
    website: 'https://www.roberts.senate.gov',
    email: 'pat.roberts@ks.senate.gov',
    contact: 'https://www.roberts.senate.gov/public/?p=EmailPat'
  },
  {
    firstName: 'Shelley',
    lastName: 'Capito',
    street: '172 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'WV',
    zip: '20510',
    phone: '202-224-6472',
    website: 'https://www.capito.senate.gov',
    email: 'shelley.m.capito@wv.senate.gov',
    contact: 'https://www.capito.senate.gov/contact/contact-shelley'
  },
  {
    firstName: 'Edward',
    lastName: 'Markey',
    street: '255 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'MA',
    zip: '20510',
    phone: '202-224-2742',
    website: 'https://www.markey.senate.gov',
    email: 'edward.j.markey@ma.senate.gov',
    contact: 'https://www.markey.senate.gov/contact'
  },
  {
    firstName: 'Tom',
    lastName: 'Udall',
    street: '531 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NM',
    zip: '20510',
    phone: '202-224-6621',
    website: 'https://www.tomudall.senate.gov',
    email: 'tom.s.udall@nm.senate.gov',
    contact: 'https://www.tomudall.senate.gov/?p=contact'
  },
  {
    firstName: 'Bill',
    lastName: 'Cassidy',
    street: '520 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'LA',
    zip: '20510',
    phone: '202-224-5824',
    website: 'https://www.cassidy.senate.gov',
    email: 'bill.cassidy@la.senate.gov',
    contact: 'https://www.cassidy.senate.gov/contact'
  },
  {
    firstName: 'Gary',
    lastName: 'Peters',
    street: '724 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MI',
    zip: '20510',
    phone: '202-224-6221',
    website: 'https://www.peters.senate.gov',
    email: 'gary.c.peters@mi.senate.gov',
    contact: 'https://www.peters.senate.gov/contact/email-gary'
  },
  {
    firstName: 'Benjamin',
    lastName: 'Sasse',
    street: '136 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'NE',
    zip: '20510',
    phone: '202-224-4224',
    website: 'https://www.sasse.senate.gov/public',
    email: 'benjamin.e.sasse@ne.senate.gov',
    contact: 'http://www.sasse.senate.gov/public/index.cfm/email-ben'
  },
  {
    firstName: 'Mark',
    lastName: 'Warner',
    street: '703 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'VA',
    zip: '20510',
    phone: '202-224-2023',
    website: 'https://www.warner.senate.gov',
    email: 'mark.warner@va.senate.gov',
    contact: 'http://www.warner.senate.gov/public/index.cfm?p=Contact'
  },
  {
    firstName: 'James',
    lastName: 'Risch',
    street: '483 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'ID',
    zip: '20510',
    phone: '202-224-2752',
    website: 'https://www.risch.senate.gov',
    email: 'james.risch@id.senate.gov',
    contact: 'http://www.risch.senate.gov/public/index.cfm?p=Email'
  },
  {
    firstName: 'Jeanne',
    lastName: 'Shaheen',
    street: '506 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NH',
    zip: '20510',
    phone: '202-224-2841',
    website: 'https://www.shaheen.senate.gov',
    email: 'jeanne.shaheen@nh.senate.gov',
    contact: 'https://www.shaheen.senate.gov/contact/contact-jeanne'
  },
  {
    firstName: 'Jeff',
    lastName: 'Merkley',
    street: '313 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'OR',
    zip: '20510',
    phone: '202-224-3753',
    website: 'https://www.merkley.senate.gov',
    email: 'jeff.merkley@or.senate.gov',
    contact: 'http://www.merkley.senate.gov/contact/'
  },
  {
    firstName: 'Alan',
    lastName: 'Franken',
    street: '309 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MN',
    zip: '20510',
    phone: '202-224-5641',
    website: 'https://www.franken.senate.gov',
    email: 'alan.s.franken@mn.senate.gov',
    contact: 'https://www.franken.senate.gov/?p=contact'
  },
  {
    firstName: 'Chris',
    lastName: 'Coons',
    street: '127a Russell Senate Office Building',
    city: 'Washington DC',
    state: 'DE',
    zip: '20510',
    phone: '202-224-5042',
    website: 'https://www.coons.senate.gov',
    email: 'chris.a.coons@de.senate.gov',
    contact: 'https://www.coons.senate.gov/contact'
  },
  {
    firstName: 'Cory',
    lastName: 'Gardner',
    street: '354 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'CO',
    zip: '20510',
    phone: '202-224-5941',
    website: 'https://www.gardner.senate.gov',
    email: 'cory.gardner@co.senate.gov',
    contact: 'https://www.gardner.senate.gov/contact-cory/email-cory'
  },
  {
    firstName: 'Tom',
    lastName: 'Cotton',
    street: '124 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'AR',
    zip: '20510',
    phone: '202-224-2353',
    website: 'https://www.cotton.senate.gov',
    email: 'tom.cotton@ar.senate.gov',
    contact: 'http://www.cotton.senate.gov/?p=contact'
  },
  {
    firstName: 'Steve',
    lastName: 'Daines',
    street: '320 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'MT',
    zip: '20510',
    phone: '202-224-2651',
    website: 'https://www.daines.senate.gov',
    email: 'steve.daines@mt.senate.gov',
    contact: 'https://www.daines.senate.gov/connect/email-steve'
  },
  {
    firstName: 'Cory',
    lastName: 'Booker',
    street: '359 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'NJ',
    zip: '20510',
    phone: '202-224-3224',
    website: 'https://www.booker.senate.gov',
    email: 'cory.a.booker@nj.senate.gov',
    contact: 'https://www.booker.senate.gov/?p=contact'
  },
  {
    firstName: 'Dan',
    lastName: 'Sullivan',
    street: '702 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'AK',
    zip: '20510',
    phone: '202-224-3004',
    website: 'https://www.sullivan.senate.gov',
    email: 'dan.sullivan@ak.senate.gov',
    contact: 'https://www.sullivan.senate.gov/contact/email'
  },
  {
    firstName: 'David',
    lastName: 'Perdue',
    street: '455 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'GA',
    zip: '20510',
    phone: '202-224-3521',
    website: 'https://www.perdue.senate.gov',
    email: 'david.perdue@ga.senate.gov',
    contact: 'https://www.perdue.senate.gov/connect/email'
  },
  {
    firstName: 'Joni',
    lastName: 'Ernst',
    street: '111 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'IA',
    zip: '20510',
    phone: '202-224-3254',
    website: 'https://www.ernst.senate.gov/public',
    email: 'joni.ernst@ia.senate.gov',
    contact: 'https://www.ernst.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Thom',
    lastName: 'Tillis',
    street: '185 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'NC',
    zip: '20510',
    phone: '202-224-6342',
    website: 'https://www.tillis.senate.gov/public',
    email: 'thom.tillis@nc.senate.gov',
    contact: 'https://www.tillis.senate.gov/public/index.cfm/email-me'
  },
  {
    firstName: 'Mike',
    lastName: 'Rounds',
    street: '502 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'SD',
    zip: '20510',
    phone: '202-224-5842',
    website: 'https://www.rounds.senate.gov',
    email: 'mike.rounds@sd.senate.gov',
    contact: 'https://www.rounds.senate.gov/contact/email-mike'
  },
  {
    firstName: 'Charles',
    lastName: 'Schumer',
    street: '322 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'NY',
    zip: '20510',
    phone: '202-224-6542',
    website: 'https://www.schumer.senate.gov',
    email: 'charles.e.schumer@ny.senate.gov',
    contact: 'https://www.schumer.senate.gov/contact/email-chuck'
  },
  {
    firstName: 'Michael',
    lastName: 'Bennet',
    street: '261 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'CO',
    zip: '20510',
    phone: '202-224-5852',
    website: 'https://www.bennet.senate.gov',
    email: 'michael.f.bennet@co.senate.gov',
    contact: 'https://www.bennet.senate.gov/?p=contact'
  },
  {
    firstName: 'Rand',
    lastName: 'Paul',
    street: '167 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'KY',
    zip: '20510',
    phone: '202-224-4343',
    website: 'https://www.paul.senate.gov',
    email: 'rand.paul@ky.senate.gov',
    contact: 'https://www.paul.senate.gov/connect/email-rand'
  },
  {
    firstName: 'John',
    lastName: 'Hoeven',
    street: '338 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'ND',
    zip: '20510',
    phone: '202-224-2551',
    website: 'https://www.hoeven.senate.gov',
    email: 'john.hoeven@nd.senate.gov',
    contact: 'http://www.hoeven.senate.gov/public/index.cfm/email-the-senator'
  },
  {
    firstName: 'James',
    lastName: 'Langevin',
    street: '2077 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'RI',
    zip: '20515-3902',
    phone: '202-225-2735',
    website: 'http://langevin.house.gov',
    email: 'james.r.langevin@ri.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Michael',
    lastName: 'Crapo',
    street: '239 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'ID',
    zip: '20510',
    phone: '202-224-6142',
    website: 'https://www.crapo.senate.gov',
    email: 'michael.d.crapo@id.senate.gov',
    contact: 'https://www.crapo.senate.gov/contact'
  },
  {
    firstName: 'Charles',
    lastName: 'Grassley',
    street: '135 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'IA',
    zip: '20510',
    phone: '202-224-3744',
    website: 'https://www.grassley.senate.gov',
    email: 'charles.e.grassley@ia.senate.gov',
    contact: 'http://www.grassley.senate.gov/contact'
  },
  {
    firstName: 'Patrick',
    lastName: 'Leahy',
    street: '437 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'VT',
    zip: '20510',
    phone: '202-224-4242',
    website: 'https://www.leahy.senate.gov',
    email: 'patrick.j.leahy@vt.senate.gov',
    contact: 'https://www.leahy.senate.gov/contact/'
  },
  {
    firstName: 'John',
    lastName: 'McCain',
    street: '218 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'AZ',
    zip: '20510',
    phone: '202-224-2235',
    website: 'https://www.mccain.senate.gov',
    email: 'john.s.mccain@az.senate.gov',
    contact: 'https://www.mccain.senate.gov/public/index.cfm/contact-form'
  },
  {
    firstName: 'Lisa',
    lastName: 'Murkowski',
    street: '522 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'AK',
    zip: '20510',
    phone: '202-224-6665',
    website: 'https://www.murkowski.senate.gov',
    email: 'lisa.a.murkowski@ak.senate.gov',
    contact: 'https://www.murkowski.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Patty',
    lastName: 'Murray',
    street: '154 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'WA',
    zip: '20510',
    phone: '202-224-2621',
    website: 'https://www.murray.senate.gov/public',
    email: 'patty.murray@wa.senate.gov',
    contact: 'http://www.murray.senate.gov/public/index.cfm/contactme'
  },
  {
    firstName: 'Richard',
    lastName: 'Shelby',
    street: '304 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'AL',
    zip: '20510',
    phone: '202-224-5744',
    website: 'https://www.shelby.senate.gov',
    email: 'richard.c.shelby@al.senate.gov',
    contact: 'https://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby'
  },
  {
    firstName: 'Ron',
    lastName: 'Wyden',
    street: '221 Dirksen Senate Office Building',
    city: 'Washington DC',
    state: 'OR',
    zip: '20510',
    phone: '202-224-5244',
    website: 'https://www.wyden.senate.gov',
    email: 'ron.wyden@or.senate.gov',
    contact: 'https://www.wyden.senate.gov/contact/'
  },
  {
    firstName: 'Robert',
    lastName: 'Aderholt',
    street: '235 Cannon House Office Building',
    city: 'Washington DC',
    state: 'AL',
    zip: '20515-0104',
    phone: '202-225-4876',
    website: 'https://aderholt.house.gov',
    email: 'robert.b.aderholt@al.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Joe',
    lastName: 'Barton',
    street: '2107 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20515-4306',
    phone: '202-225-2002',
    website: 'https://joebarton.house.gov',
    email: 'joe.l.barton@tx.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Rob',
    lastName: 'Bishop',
    street: '123 Cannon House Office Building',
    city: 'Washington DC',
    state: 'UT',
    zip: '20515-4401',
    phone: '202-225-0453',
    website: 'http://robbishop.house.gov',
    email: 'rob.bishop@ut.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Sanford',
    lastName: 'Bishop',
    street: '2407 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'GA',
    zip: '20515-1002',
    phone: '202-225-3631',
    website: 'http://bishop.house.gov',
    email: 'sanford.d.bishop@ga.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Marsha',
    lastName: 'Blackburn',
    street: '2266 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'TN',
    zip: '20515-4207',
    phone: '202-225-2811',
    website: 'http://blackburn.house.gov',
    email: 'marsha.w.blackburn@tn.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Earl',
    lastName: 'Blumenauer',
    street: '1111 Longworth House Office Building',
    city: 'Washington DC',
    state: 'OR',
    zip: '20515-3703',
    phone: '202-225-4811',
    website: 'https://blumenauer.house.gov',
    email: 'earl.blumenauer@or.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Roy',
    lastName: 'Blunt',
    street: '260 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'MO',
    zip: '20510',
    phone: '202-224-5721',
    website: 'https://www.blunt.senate.gov/public',
    email: 'roy.blunt@mo.senate.gov',
    contact: 'https://www.blunt.senate.gov/public/index.cfm/contact-roy'
  },
  {
    firstName: 'John',
    lastName: 'Boozman',
    street: '141 Hart Senate Office Building',
    city: 'Washington DC',
    state: 'AR',
    zip: '20510',
    phone: '202-224-4843',
    website: 'https://www.boozman.senate.gov/public',
    email: 'john.boozman@ar.senate.gov',
    contact: 'https://www.boozman.senate.gov/public/index.cfm/contact'
  },
  {
    firstName: 'Madeleine',
    lastName: 'Bordallo',
    street: '2441 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'GU',
    zip: '20515-5301',
    phone: '202-225-1188',
    website: 'https://bordallo.house.gov',
    email: 'madeleine.z.bordallo@gu.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Kevin',
    lastName: 'Brady',
    street: '1011 Longworth House Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20515-4308',
    phone: '202-225-4901',
    website: 'http://kevinbrady.house.gov',
    email: 'kevin.p.brady@tx.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Robert',
    lastName: 'Brady',
    street: '2004 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'PA',
    zip: '20515-3801',
    phone: '202-225-4731',
    website: 'http://brady.house.gov',
    email: 'robert.a.brady@pa.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Michael',
    lastName: 'Burgess',
    street: '2336 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20515-4326',
    phone: '202-225-7772',
    website: 'http://burgess.house.gov',
    email: 'michael.c.burgess@tx.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Richard',
    lastName: 'Burr',
    street: '217 Russell Senate Office Building',
    city: 'Washington DC',
    state: 'NC',
    zip: '20510',
    phone: '202-224-3154',
    website: 'https://www.burr.senate.gov',
    email: 'richard.m.burr@nc.senate.gov',
    contact: 'https://www.burr.senate.gov/contact/email'
  },
  {
    firstName: 'Ken',
    lastName: 'Calvert',
    street: '2205 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'CA',
    zip: '20515-0542',
    phone: '202-225-1986',
    website: 'http://calvert.house.gov',
    email: 'ken.s.calvert@ca.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Michael',
    lastName: 'Capuano',
    street: '1414 Longworth House Office Building',
    city: 'Washington DC',
    state: 'MA',
    zip: '20515-2107',
    phone: '202-225-5111',
    website: 'http://capuano.house.gov',
    email: 'michael.e.capuano@ma.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'John',
    lastName: 'Carter',
    street: '2110 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'TX',
    zip: '20515-4331',
    phone: '202-225-3864',
    website: 'https://carter.house.gov',
    email: 'john.r.carter@tx.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Steve',
    lastName: 'Chabot',
    street: '2371 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'OH',
    zip: '20515-3501',
    phone: '202-225-2216',
    website: 'http://chabot.house.gov',
    email: 'steve.j.chabot@oh.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Wm.',
    lastName: 'Clay',
    street: '2428 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'MO',
    zip: '20515-2501',
    phone: '202-225-2406',
    website: 'https://lacyclay.house.gov',
    email: 'wm..l.clay@mo.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'James',
    lastName: 'Clyburn',
    street: '242 Cannon House Office Building',
    city: 'Washington DC',
    state: 'SC',
    zip: '20515-4006',
    phone: '202-225-3315',
    website: 'http://clyburn.house.gov',
    email: 'james.e.clyburn@sc.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Tom',
    lastName: 'Cole',
    street: '2467 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'OK',
    zip: '20515-3604',
    phone: '202-225-6165',
    website: 'https://cole.house.gov',
    email: 'tom.cole@ok.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'John',
    lastName: 'Conyers',
    street: '2426 Rayburn House Office Building',
    city: 'Washington DC',
    state: 'MI',
    zip: '20515-2213',
    phone: '202-225-5126',
    website: 'https://conyers.house.gov',
    email: 'john.conyers@mi.senate.gov',
    contact: 'unknown'
  },
  {
    firstName: 'Jim',
    lastName: 'Cooper',
    street: '1536 Longworth House Office Building',
    city: 'Washington DC',
    state: 'TN',
    zip: '20515-4205',
    phone: '202-225-4311',
    website: 'http://cooper.house.gov',
    email: 'jim.cooper@tn.senate.gov',
    contact: 'unknown'
  }

];

export default addresses;