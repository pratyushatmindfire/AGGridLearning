import { Component, OnInit } from '@angular/core';
import { PhoneCellRendererComponent } from '../../renderer/phone-cell-renderer/phone-cell-renderer.component';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent implements OnInit {
  recordCount: any;
  lastClicked: any = '';
  gridApi: any;
  gridColumnApi: any;
  
  
  constructor() { }
  
  public apiReference: any;
  public frameworksComponents = {
    phoneCellRenderer: PhoneCellRendererComponent
  };
  
  
  
  public defaultColumnDef = {
    headerClass: (params: any) => {return this.getHeaderClass(params)}
  };
  
  public columnDef = [
    {headerName: 'Student Name', field: 'student_name', sortable: true, suppressSizeToFit: true, pinned: 'left', lockPinned: true, 
    cellStyle: (params: any) => {
      if (params.value.length < 5) {
        return {backgroundColor: '#ffeaee'};
      }
      
      else if (params.value.length === 5) {
        return {backgroundColor: '#f0f8ff'};
      }
      
      else {
        return {backgroundColor: '#cfffd1'};
      }
    } 
  }, 
  {headerName: 'School Name', field: 'school_name', suppressSizeToFit: true}, 
  {headerName: 'Address', field: 'address', suppressSizeToFit: true},
  {headerName: 'City', field: 'city', sortable: true, suppressSizeToFit: true},
  {headerName: 'Country', field: 'county', filter: true},
  {headerName: 'Postal', field: 'postal', suppressSizeToFit: true, valueFormatter: (params: any) => params.data.postal.replace(/\s/g, '')},
  {headerName: 'Phone', field: 'phone', filter: true, suppressSizeToFit: true, cellRenderer: 'phoneCellRenderer'},
  {headerName: 'Email', field: 'email', cellStyle: {fontSize: '12px', fontStyle: 'italic', color: 'blue'}}
];

public dataSource = [
  {"student_name":"Aleshia","school_name":"Alan D Rosenburg Cpa Pc","address":"14 Taylor St","city":"St. Stephens Ward","county":"Kent","postal":"CT2 7PP","phone":"01944-369967","email":"atomkiewicz@hotmail.com"},
  {"student_name":"Evan","school_name":"Cap Gemini America","address":"5 Binney St","city":"Abbey Ward","county":"Buckinghamshire","postal":"HP11 2AX","phone":"01714-737668","email":"evan.zigomalas@gmail.com"},
  {"student_name":"France","school_name":"Elliott, John W Esq","address":"8 Moor Place","city":"East Southbourne and Tuckton W","county":"Bournemouth","postal":"BH6 3BE","phone":"01935-821636","email":"france.andrade@hotmail.com"},
  {"student_name":"Ulysses","school_name":"Mcmahan, Ben L","address":"505 Exeter Rd","city":"Hawerby cum Beesby","county":"Lincolnshire","postal":"DN36 5RP","phone":"01302-601380","email":"ulysses@hotmail.com"},
  {"student_name":"Tyisha","school_name":"Champagne Room","address":"5396 Forth Street","city":"Greets Green and Lyng Ward","county":"West Midlands","postal":"City","phone":"01290-367248","email":"tyisha.veness@hotmail.com"},
  {"student_name":"Eric","school_name":"Thompson, Michael C Esq","address":"9472 Lind St","city":"Desborough","county":"Northamptonshire","postal":"County","phone":"01545-817375","email":"erampy@rampy.co.uk"},
  {"student_name":"Marg","school_name":"Wrangle Hill Auto Auct & Slvg","address":"7457 Cowl St #70","city":"Bargate Ward","county":"Southampton","postal":"State/Province","phone":"01362-620532","email":"marg@hotmail.com"},
  {"student_name":"Laquita","school_name":"In Communications Inc","address":"20 Gloucester Pl #96","city":"Chirton Ward","county":"Tyne & Wear","postal":"ZIP/Postal Code","phone":"01590-982428","email":"laquita@yahoo.com"},
  {"student_name":"Lura","school_name":"Bizerba Usa Inc","address":"929 Augustine St","city":"Staple Hill Ward","county":"South Gloucestershire","postal":"BS16 4LL","phone":"01340-713951","email":"lura@hotmail.com"},
  {"student_name":"Yuette","school_name":"Max Video","address":"45 Bradfield St #166","city":"Parwich","county":"Derbyshire","postal":"DE6 1QN","phone":"01933-512513","email":"yuette.klapec@klapec.co.uk"},
  {"student_name":"Fernanda","school_name":"K & R Associates Inc","address":"620 Northampton St","city":"Wilmington","county":"Kent","postal":"DA2 7PP","phone":"01687-879391","email":"fernanda@writer.co.uk"},
  {"student_name":"Charlesetta","school_name":"Cain, John M Esq","address":"5 Hygeia St","city":"Loundsley Green Ward","county":"Derbyshire","postal":"S40 4LY","phone":"01517-624517","email":"charlesetta_erm@gmail.com"},
  {"student_name":"Corrinne","school_name":"Sound Vision Corp","address":"2150 Morley St","city":"Dee Ward","county":"Dumfries and Galloway","postal":"DG8 7DE","phone":"01642-322954","email":"corrinne_jaret@gmail.com"},
  {"student_name":"Niesha","school_name":"Rowley/hansell Petetin","address":"24 Bolton St","city":"Broxburn, Uphall and Winchburg","county":"West Lothian","postal":"EH52 5TL","phone":"01342-793603","email":"niesha.bruch@yahoo.com"},
  {"student_name":"Rueben","school_name":"Industrial Engineering Assocs","address":"4 Forrest St","city":"Weston-Super-Mare","county":"North Somerset","postal":"BS23 3HG","phone":"01956-535511","email":"rueben_gastellum@gastellum.co.uk"},
  {"student_name":"Michell","school_name":"Weiss Spirt & Guyer","address":"89 Noon St","city":"Carbrooke","county":"Norfolk","postal":"IP25 6JQ","phone":"01672-496478","email":"mthrossell@throssell.co.uk"},
  {"student_name":"Edgar","school_name":"Crowan, Kenneth W Esq","address":"99 Guthrie St","city":"New Milton","county":"Hampshire","postal":"BH25 5DF","phone":"01666-638176","email":"edgar.kanne@yahoo.com"},
  {"student_name":"Dewitt","school_name":"Rittenhouse Motor Co","address":"7 Richmond St","city":"Parkham","county":"Devon","postal":"EX39 5DJ","phone":"01241-964675","email":"dewitt.julio@hotmail.com"},
  {"student_name":"Charisse","school_name":"Modern Plastics Corp","address":"9165 Primrose St","city":"Darnall Ward","county":"Yorkshire, South","postal":"S4 7WN","phone":"01207-428520","email":"charisse_spinello@spinello.co.uk"},
  {"student_name":"Mee","school_name":"Galloway Electric Co Inc","address":"9 Pengwern St","city":"Marldon","county":"Devon","postal":"TQ3 1SA","phone":"01939-815208","email":"mee.lapinski@yahoo.com"},
  {"student_name":"Peter","school_name":"Niagara Custombuilt Mfg Co","address":"4410 Tarlton St","city":"Prestatyn Community","county":"Denbighshire","postal":"LL19 9EG","phone":"01859-648598","email":"peter_gutierres@yahoo.com"},
  {"student_name":"Octavio","school_name":"Practical Periphrals","address":"6949 Bourne St","city":"Lye and Stourbridge North Ward","county":"West Midlands","postal":"DY5 2QP","phone":"01743-139456","email":"octavio.salvadore@yahoo.com"},
  {"student_name":"Martha","school_name":"Curtin, Patricia M Esq","address":"148 Rembrandt St","city":"Warlingham","county":"Surrey","postal":"CR6 9SW","phone":"01583-287367","email":"mteplica@teplica.co.uk"},
  {"student_name":"Tamesha","school_name":"Wilhelm, James E Jr","address":"2200 Nelson St #58","city":"Newport","county":"Isle of Wight","postal":"PO30 5AL","phone":"01280-786847","email":"tveigel@veigel.co.uk"},
  {"student_name":"Tess","school_name":"Smart Signs","address":"61 Rossett St","city":"Chichester","county":"West Sussex","postal":"PO19 1RH","phone":"01848-116775","email":"tess_sitra@hotmail.com"},
  {"student_name":"Leonard","school_name":"Arctic Star Distributing Inc","address":"41 Canning St","city":"Steornabhagh a Deas Ward","county":"Western Isles","postal":"HS1 2PZ","phone":"01604-718601","email":"lkufner@kufner.co.uk"},
  {"student_name":"Svetlana","school_name":"Lensbower, Gregory L Esq","address":"8289 Cadogan St","city":"South Ward","county":"North Eart Lincolnshire","postal":"DN33 1AU","phone":"01509-121140","email":"svetlana_tauras@tauras.co.uk"},
  {"student_name":"Pok","school_name":"Portal Metal Products","address":"211 Hobart St","city":"Newquay","county":"Cornwall","postal":"TR7 1LS","phone":"01315-284286","email":"pok@yahoo.com"},
  {"student_name":"Augustine","school_name":"Lynema, Cliff Cpa","address":"114 Falkland St #8845","city":"Brimpton","county":"Berkshire","postal":"RG7 4RF","phone":"01926-108010","email":"augustine.growcock@growcock.co.uk"},
  {"student_name":"Karma","school_name":"J C S Machinery","address":"1 Birkett St","city":"Shard End Ward","county":"West Midlands","postal":"B33 0NH","phone":"01307-667811","email":"kquarto@gmail.com"},
  {"student_name":"Reed","school_name":"Berick, Joseph G Esq","address":"5147 Blackstone St","city":"Letchworth South West Ward","county":"Hertfordshire","postal":"SG6 3LE","phone":"01292-297245","email":"reed_weisinger@yahoo.com"},
  {"student_name":"German","school_name":"Jackson & Heit Machine Co Inc","address":"7 Shenstone St","city":"Longhill Ward","county":"Yorkshire, East (North Humbers","postal":"HU8 9PZ","phone":"01366-210656","email":"german@hotmail.com"},
  {"student_name":"Milly","school_name":"Bridgeway Plan For Health","address":"129 Alexander Pope St","city":"Franche Ward","county":"Hereford and Worcester","postal":"DY11 9BW","phone":"01421-132652","email":"milly@gmail.com"},
  {"student_name":"Luis","school_name":"Wa Inst For Plcy Studies","address":"2 Birchfield Rd","city":"Whittington","county":"Shropshire","postal":"SY11 4PH","phone":"01405-648623","email":"luis@hotmail.com"},
  {"student_name":"Ciara","school_name":"Wmgl 101.7 Fm","address":"7523 Kempton Rd","city":"Cockerton West Ward","county":"Darlington","postal":"DL3 0JF","phone":"01809-443217","email":"ciara_cobbley@hotmail.com"},
  {"student_name":"Alethea","school_name":"Hughlett, Henry T Jr","address":"6305 Elstow St","city":"Castle Ward","county":"West Sussex","postal":"BN12 6PR","phone":"01351-868965","email":"alethea@hotmail.com"},
  {"student_name":"Margurite","school_name":"Penrose Place Pharmacy Inc","address":"218 Greenbank Drive","city":"Devizes","county":"Wiltshire","postal":"SN10 3DU","phone":"01640-661191","email":"mloperfido@gmail.com"},
  {"student_name":"Vernice","school_name":"Novak, Alan Paul Esq","address":"8921 Forge St","city":"Colnbrook with Poyle","county":"Buckinghamshire","postal":"SL3 0PY","phone":"01765-519419","email":"vernice@yahoo.com"},
  {"student_name":"Vicente","school_name":"B & S Tool And Cutter Svc Inc","address":"3060 St Ambrose Grove #261","city":"Aldridge Central and South War","county":"West Midlands","postal":"WS9 8UR","phone":"01286-258121","email":"vicente_rawicki@hotmail.com"},
  {"student_name":"Craig","school_name":"Berry, John M Esq","address":"8388 Bessemer St #5","city":"East Putney Ward","county":"Greater London","postal":"SW15 2RP","phone":"01818-980469","email":"craig@hotmail.com"},
  {"student_name":"Jenise","school_name":"Alden, Michael H Esq","address":"87 Pownall Sq","city":"Sawston","county":"Cambridgeshire","postal":"CB22 3BB","phone":"01572-193368","email":"jenise.dulle@hotmail.com"},
  {"student_name":"Marylin","school_name":"Ernest E Heuer & Company Pc","address":"39 Wye St","city":"Wakefield North Ward","county":"West Yorkshire","postal":"WF1 1DR","phone":"01295-331807","email":"marylin_cornelison@yahoo.com"},
  {"student_name":"Marget","school_name":"Frankel, Stephen","address":"2732 Bostock St #1","city":"St. Enoder","county":"Cornwall","postal":"TR9 6NJ","phone":"01512-975244","email":"mgunst@yahoo.com"},
  {"student_name":"Annett","school_name":"Guynes Design Inc","address":"5562 Fairfield St #847","city":"Ryde","county":"Isle of Wight","postal":"PO33 1HH","phone":"01333-972244","email":"abunselmeyer@hotmail.com"},
  {"student_name":"Kip","school_name":"General Appraisal Co","address":"37 Meadow St","city":"Laindon Park Ward","county":"Essex","postal":"SS15 6LE","phone":"01222-164469","email":"kip.turziano@yahoo.com"},
  {"student_name":"Melina","school_name":"Sheraton Inn Ocean Front","address":"3 Nevison St","city":"Lymington and Pennington","county":"Hampshire","postal":"SO41 1DL","phone":"01245-559333","email":"melina@gmail.com"},
  {"student_name":"Tina","school_name":"Cooper Myers Y Co","address":"5662 William Moult St","city":"Aylesbury","county":"Buckinghamshire","postal":"HP21 8PP","phone":"01493-245349","email":"tclapham@gmail.com"},
  {"student_name":"Luisa","school_name":"Cash 4 Checks","address":"3 North View #35","city":"Burmantofts and Richmond Hill","county":"West Yorkshire","postal":"LS9 7JH","phone":"01334-807355","email":"ldevereux@gmail.com"},
  {"student_name":"Pedro","school_name":"Charlotte Chamber","address":"135 Opie St","city":"Howard Town Ward","county":"Derbyshire","postal":"SK13 8BB","phone":"01823-517315","email":"paschoff@yahoo.com"},
  {"student_name":"Carrol","school_name":"Kisc 98 Kiss Fm","address":"1 Askew St","city":"Farnham","county":"Surrey","postal":"GU9 9AS","phone":"01415-364461","email":"carrol_kunimitsu@yahoo.com"},
  {"student_name":"Alba","school_name":"Schwartzbard, Gail L Esq","address":"4 Burnall St","city":"Beeston West Ward","county":"Nottinghamshire","postal":"NG9 1AE","phone":"01231-806535","email":"alba@gmail.com"},
  {"student_name":"Domonique","school_name":"Marketing Horizons Inc","address":"95 Denton St","city":"Wollaton West Ward","county":"Nottinghamshire","postal":"NG8 2NB","phone":"01987-728730","email":"domonique@hotmail.com"},
  {"student_name":"Rory","school_name":"Brady, Brad J Esq","address":"5 Chadwick St #7","city":"Llangeler Community","county":"Ceredigion","postal":"SA44 5HF","phone":"01442-700486","email":"rory_neufville@neufville.co.uk"},
  {"student_name":"Dustin","school_name":"Welders Supply","address":"67 Micawber St","city":"Brockley Ward","county":"Greater London","postal":"SE14 6RQ","phone":"01523-775781","email":"dklingaman@gmail.com"},
  {"student_name":"Lyndia","school_name":"Bomarko Inc","address":"43 Williamson St #7995","city":"Meads Ward","county":"East Sussex","postal":"BN20 7HB","phone":"01789-132579","email":"lyndia_moonshower@moonshower.co.uk"},
  {"student_name":"Jules","school_name":"Benitez, Brigida Esq","address":"5 Howe St","city":"Broxburn, Uphall and Winchburg","county":"West Lothian","postal":"EH52 6NF","phone":"01814-878359","email":"jules@yahoo.com"},
  {"student_name":"Dong","school_name":"Kennedy Scales Inc","address":"7 Cheapside #9","city":"St. Ive","county":"Cornwall","postal":"PL14 5PA","phone":"01639-518104","email":"dkopczynski@kopczynski.co.uk"},
  {"student_name":"Justine","school_name":"Barajas & Bustamante Archl","address":"85 Bridgewater St","city":"Shard End Ward","county":"West Midlands","postal":"B34 7BP","phone":"01376-851958","email":"justine_salta@yahoo.com"},
  {"student_name":"Chantay","school_name":"Brewster Wallcoverings Co","address":"763 Parkfield Rd","city":"Norton Canes","county":"Staffordshire","postal":"WS11 9RH","phone":"01245-146126","email":"ckamens@hotmail.com"},
  {"student_name":"Tequila","school_name":"Bohs Well Drilling Inc","address":"662 Grove Park","city":"Bulwell Ward","county":"Nottinghamshire","postal":"NG6 8RG","phone":"01702-946496","email":"tequila.chisum@chisum.co.uk"},
  {"student_name":"Maybelle","school_name":"Gavin, Lee W Esq","address":"5410 Lawton St","city":"Treorchy Community","county":"Rhondda Cynon Taff","postal":"CF42 6PL","phone":"01351-200904","email":"mconsolazio@yahoo.com"},
  {"student_name":"Margarett","school_name":"Reid, Carleton B Esq","address":"3 August Rd","city":"Maybury and Sheerwater Ward","county":"Surrey","postal":"GU21 5QL","phone":"01903-424890","email":"margarett@gmail.com"},
  {"student_name":"Janessa","school_name":"Canterbury, Christopher C","address":"476 Starkie St","city":"Westgate Ward","county":"Gloucestershire","postal":"GL1 1QW","phone":"01841-979075","email":"jnoonon@yahoo.com"},
  {"student_name":"Sol","school_name":"Omni Mandalay","address":"6448 Tillard St","city":"Conisbrough and Denaby Ward","county":"South Yorkshire","postal":"DN12 4JF","phone":"01580-134516","email":"sol@gmail.com"},
  {"student_name":"Louann","school_name":"Lba Savings Bank","address":"3055 Creswick St","city":"Newbold and Brownsover Ward","county":"Warwickshire","postal":"CV21 1LN","phone":"01488-872531","email":"louann@gmail.com"},
  {"student_name":"Lindsay","school_name":"Lutz, Christopher T Esq","address":"7 Jolliffe St","city":"Middlewich","county":"Cheshire","postal":"CW10 9GB","phone":"01481-295251","email":"lindsay_yadao@yadao.co.uk"},
  {"student_name":"Malika","school_name":"Association Of Art Museum Dir","address":"1175 Greig St","city":"St. Marys Ward","county":"Greater Manchester","postal":"M25 0ZN","phone":"01705-208145","email":"malika@gmail.com"},
  {"student_name":"Stefany","school_name":"L & L Sales Co Inc","address":"636 Portland Place","city":"Gresham Ward","county":"Middlesbrough","postal":"TS1 4RG","phone":"01704-986828","email":"stefany@hotmail.com"},
  {"student_name":"Abraham","school_name":"Cavuto, John A","address":"41 Benedict St","city":"Aldborough Ward","county":"Greater London","postal":"IG2 7QG","phone":"01695-305111","email":"acratch@gmail.com"},
  {"student_name":"Giuseppe","school_name":"Pacific Coast Packaging","address":"62 Margaret St","city":"Royal Hospital Ward","county":"Greater London","postal":"SW3 4ND","phone":"01866-845669","email":"giuseppe@yahoo.com"},
  {"student_name":"Kiera","school_name":"Storm Eye Institute","address":"5152 Sophia St","city":"Woodstock Ward","county":"South Gloucestershire","postal":"BS15 8DS","phone":"01783-446052","email":"kbassil@bassil.co.uk"},
  {"student_name":"Wendell","school_name":"Automation Engrg & Mfg Inc","address":"1 Back Canning St","city":"Dunblane and Bridge of Allan W","county":"Stirling","postal":"FK9 4LD","phone":"01752-386691","email":"wendell_rubano@hotmail.com"},
  {"student_name":"Stevie","school_name":"Packaging Corp Of America","address":"9 Gradwell St","city":"Kempshott Ward","county":"Hampshire","postal":"RG22 5HA","phone":"01411-169215","email":"stevie_stifflemire@stifflemire.co.uk"},
  {"student_name":"Yun","school_name":"Goe, Douglas E Esq","address":"9205 Upper Hill St","city":"City and Hunslet Ward","county":"West Yorkshire","postal":"LS1 5QE","phone":"01374-255198","email":"yun_paletta@paletta.co.uk"},
  {"student_name":"Brittani","school_name":"Burgess Steel Products Corp","address":"9 Horatio St","city":"Ruckinge","county":"Kent","postal":"TN26 2PN","phone":"01970-890023","email":"bthurm@yahoo.com"},
  {"student_name":"Billy","school_name":"Tipton & Hurst","address":"61 Miriam St","city":"Abbey Road Ward","county":"Greater London","postal":"NW8 9BD","phone":"01703-435212","email":"billy.venus@yahoo.com"},
  {"student_name":"Brynn","school_name":"A O Hardee & Son Inc","address":"67 Pulford St","city":"Prittlewell Ward","county":"Essex","postal":"SS2 6NL","phone":"01345-625433","email":"brynn@yahoo.com"},
  {"student_name":"Elroy","school_name":"Jonson, Geo D Esq","address":"821 Pembroke Place","city":"Kirkby Stephen","county":"Cumbria","postal":"CA17 4RZ","phone":"01586-387018","email":"epiehler@piehler.co.uk"},
  {"student_name":"Anisha","school_name":"Dale Yoder Clu Life Hlth & Bus","address":"3 Alder St","city":"Eaton Park Ward","county":"Stoke-on-Trent","postal":"ST2 9AW","phone":"01268-233798","email":"ashulick@yahoo.com"},
  {"student_name":"Bettina","school_name":"Council Of Cmnty Blood Ctrs","address":"80 Morecambe St","city":"Bishop Auckland","county":"County Durham","postal":"DL14 6NG","phone":"01340-622388","email":"bettina.kham@kham.co.uk"},
  {"student_name":"Velda","school_name":"Tremont, Michael A Esq","address":"7866 Renshaw St #283","city":"Falmouth","county":"Cornwall","postal":"TR11 4QQ","phone":"01368-456268","email":"velda_mancilla@mancilla.co.uk"},
  {"student_name":"Marta","school_name":"Trautman, Eileen Esq","address":"658 Lake St","city":"Malmesbury","county":"Wiltshire","postal":"SN16 0XZ","phone":"01631-454193","email":"marta.brace@brace.co.uk"},
  {"student_name":"Juan","school_name":"Office Service Co","address":"5382 Redfern St","city":"West End Ward","county":"Greater London","postal":"W1J 0QH","phone":"01728-150282","email":"juan_vanwyhe@gmail.com"},
  {"student_name":"Lelia","school_name":"Alphabetland Pre School Center","address":"45 Bidder St #38","city":"Town Ward","county":"Greater London","postal":"EN1 3HT","phone":"01322-715065","email":"lelia.filion@filion.co.uk"},
  {"student_name":"Una","school_name":"Shamrock Food Service","address":"6766 Britton St #379","city":"Crompton Ward","county":"Greater Manchester","postal":"BL1 3EX","phone":"01308-356704","email":"ufrankel@hotmail.com"},
  {"student_name":"Eva","school_name":"Central Hrdwr & Elec Corp","address":"7 Lear Rd","city":"Stroud","county":"Hampshire","postal":"GU32 3PQ","phone":"01961-802899","email":"eva.joulwan@gmail.com"},
  {"student_name":"Mammie","school_name":"Matt Parrott & Sons Co","address":"2577 Toxteth St #5","city":"Overton Ward","county":"Lancashire","postal":"BB6 7UN","phone":"01439-184366","email":"mammie_dormanen@hotmail.com"},
  {"student_name":"Jeannetta","school_name":"Tiny Tots Originals Div","address":"761 Cockerell St #1","city":"Midway Ward","county":"Derbyshire","postal":"DE11 0HE","phone":"01440-276155","email":"jeannetta_coolidge@gmail.com"},
  {"student_name":"Elbert","school_name":"Lovitch, Alan F","address":"9 Cypress St","city":"Washington East Ward","county":"Tyne and Wear","postal":"NE38 9AQ","phone":"01496-526674","email":"edrawe@drawe.co.uk"},
  {"student_name":"Lenny","school_name":"Wise Industries","address":"6 Romilly St","city":"Walkergate Ward","county":"Tyne and Wear","postal":"NE6 4YH","phone":"01342-706893","email":"lenny.gazzola@yahoo.com"},
  {"student_name":"Mira","school_name":"East County Process","address":"51 St Anne St #12","city":"Stratfield Mortimer","county":"Berkshire","postal":"RG7 3RA","phone":"01381-836777","email":"mira.alpheaus@yahoo.com"},
  {"student_name":"Cathern","school_name":"Agopgee Enterprises Inc","address":"823 Idris St","city":"Selston","county":"Nottinghamshire","postal":"NG16 5LG","phone":"01266-671305","email":"cathern.ungar@ungar.co.uk"},
  {"student_name":"Malcom","school_name":"L Winik & Associates Inc","address":"8764 Nickleby St #877","city":"Govan Ward","county":"Glasgow City","postal":"G51 1BQ","phone":"01937-120539","email":"malcom.fleckles@gmail.com"},
  {"student_name":"Monroe","school_name":"Rosati, Marc D Esq","address":"5344 Bengel St #5","city":"Millwall Ward","county":"Greater London","postal":"E14 5DR","phone":"01440-164945","email":"mdamato@damato.co.uk"},
  {"student_name":"Leota","school_name":"Rust Evader Corp","address":"8880 Great Howard St #7750","city":"Sefton","county":"Merseyside","postal":"L29 7WD","phone":"01414-780251","email":"lfletchen@gmail.com"},
  {"student_name":"Berry","school_name":"Budget Annex","address":"9 Oakleigh","city":"Lancing","county":"West Sussex","postal":"BN15 9BN","phone":"01929-400879","email":"berry@gmail.com"},
  {"student_name":"Meghan","school_name":"Kiqo Pure Gold Oldies 104 Fm","address":"83 Denbigh St Bootle","city":"St. Gluvias","county":"Cornwall","postal":"TR3 7AZ","phone":"01650-129106","email":"meghan@riherd.co.uk"},
  {"student_name":"Mike","school_name":"Segall Majestic Inc","address":"30 Aughton St","city":"Hilton","county":"Aberdeenshire","postal":"AB24 2RR","phone":"01408-918612","email":"mike_torner@torner.co.uk"},
  {"student_name":"Elsa","school_name":"Taos Valley Resort Assn","address":"260 Saxon St","city":"Brooklands Ward","county":"Greater Manchester","postal":"M33 4BP","phone":"01204-471598","email":"elsa_delisle@gmail.com"}
];

public gridOptions = {
  rowSelection: 'multiple',
  onSelectionChanged: this.selectionChanged,
  suppressMenuHide: true,
  headerHeight: 50,
  getRowClass: (params: any) => {
    if (params.node.rowIndex % 2 === 0) {
      return 'evenRow';
    }
    return undefined;
  }
}

onCellClicked(params: any) {
  this.lastClicked = JSON.stringify(params.data);
}

onCellDoubleClicked(params: any) {
  alert(JSON.stringify(params.data));
}

getHeaderClass(params: any) {
  return params.column.instanceId % 2 === 0? 'blueHeader': 'skyBlueHeader';
}

selectionChanged(event: any) {
  console.log(event);
}

onGridReady(params: any) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  console.log("Grid ready");
}

ngOnInit(): void {
}

}

