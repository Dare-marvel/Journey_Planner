class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let ind = this.values.length - 1;
    const element = this.values[ind];
    while (ind > 0) {
      let parentind = Math.floor((ind - 1) / 2);
      let parent = this.values[parentind];
      if (element.priority >= parent.priority) break;
      this.values[parentind] = element;
      this.values[ind] = parent;
      ind = parentind;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let ind = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildind = 2 * ind + 1;
      let rightChildind = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildind < length) {
        leftChild = this.values[leftChildind];
        if (leftChild.priority < element.priority) {
          swap = leftChildind;
        }
      }
      if (rightChildind < length) {
        rightChild = this.values[rightChildind];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildind;
        }
      }
      if (swap === null) break;
      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }
}

//Dijkstra's algorithm 
class WeightedGraph {
  constructor() {
    this.adj = {};
  }
  addVertex(vertex) {
    if (!this.adj[vertex]) this.adj[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adj[vertex1].push({ node: vertex2, weight });
    this.adj[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(src, des) {
    const pq = new PriorityQueue();
    const time = {};
    const prev = {};
    let path = [];
    let least;

    for (let vertex in this.adj) {
      if (vertex === src) {
        time[vertex] = 0;
        pq.enqueue(vertex, 0);
      }
      else {
        time[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      prev[vertex] = null;
    }

    while (pq.values.length) {
      least = pq.dequeue().val;
      if (least === des) {

        while (prev[least]) {
          path.push(least);
          least = prev[least];
        }
        break;
      }
      if (least || time[least] !== Infinity) {
        for (let neighbor in this.adj[least]) {

          let nextNode = this.adj[least][neighbor];

          let nextNeighbor = nextNode.node;
          if (time[least] + nextNode.weight < time[nextNeighbor]) {

            time[nextNeighbor] = time[least] + nextNode.weight;

            prev[nextNeighbor] = least;
            pq.enqueue(nextNeighbor, time[least] + nextNode.weight);
          }
        }
      }
    }
    const comp_path = (path.concat(least).reverse()).join('=> ');
    const time_taken = time[des]
    return { comp_path, time_taken };
  }

}





var g = new WeightedGraph();

//Central Line
g.addVertex("CSMT");            //Chhatrapati Shivaji Maharaj Terminus=CSMT
g.addVertex("MB");            //Masjid Bunder=MB
g.addVertex("SandhurstR");    //Sandhurst Road=SandhurstR
g.addVertex("Byculla");
g.addVertex("Chinchpokli");
g.addVertex("CurreyR");        //Currey Road=CurreyR
g.addVertex("Parel");                 //Mumbai Central
g.addVertex("Dadar");
g.addVertex("Matunga");
g.addVertex("Sion");
g.addVertex("Kurla");
g.addVertex("VidyaVihar");          //Vidya Vihar=VidyaVihar
g.addVertex("Ghatkopar");
g.addVertex("Vikhroli");
g.addVertex("KanjurMarg");          //Kanjur Marg=KanjurMarg
g.addVertex("Bhandup");
g.addVertex("Nahur");
g.addVertex("Mulund");
g.addVertex("Thane");
g.addVertex("Kalwa");
g.addVertex("Mumbra");
g.addVertex("Diva");
g.addVertex("Kopar");
g.addVertex("Dombivali");
g.addVertex("Thakurli");
g.addVertex("Kalyan");
g.addVertex("Ulhasnagar");
g.addVertex("Ambernath");
g.addVertex("Badlapur");
g.addVertex("Karjat");
g.addVertex("Khopoli");
g.addVertex("Titwala");
g.addVertex("Asangaon");
g.addVertex("Atgaon");
g.addVertex("Khardi");
g.addVertex("Kasara");

//Harbour line
g.addVertex("DockyardR");
g.addVertex("ReayR");            //Reay Road=ReayR
g.addVertex("CG");               //Cotton green=CG
g.addVertex("Sewri");
g.addVertex("VadalaR");             //Vadala Road=VadalaR
g.addVertex("GTBN");               //GTB Nagar=GTBN
g.addVertex("Chunabhatti");
g.addVertex("TilakN");              //Tilak Nagar =TilakN
g.addVertex("Chembur");
g.addVertex("Govandi");
g.addVertex("Mankhurd");
g.addVertex("Vashi");
g.addVertex("Sanpada");
g.addVertex("Juinagar");
g.addVertex("Nerul");
g.addVertex("SeawoodsDarave");      //Seawoods Darave=SeawoodsDarave
g.addVertex("BelapurCBD");        //CBD BEelapur=BelapurCBD
g.addVertex("Kharghar");
g.addVertex("Manasarovar");
g.addVertex("Khandeshwar");
g.addVertex("Panvel");
g.addVertex("Airoli");
g.addVertex("Rabale");
g.addVertex("Ghansoli");
g.addVertex("KoparKhairane");       //Kopar Khairane=KoparKhairane
g.addVertex("Turbhe");
g.addVertex("KingCircle");          //King's Circle=KingCircle

//Western Line
g.addVertex("Churchgate");
g.addVertex("ML");               //Marine Lines=ML
g.addVertex("CharniR");         //Charni Road=CharniR
g.addVertex("GrantR");         //Grant Road.=GrantR
g.addVertex("MC");            //Mumbai Central=MC
g.addVertex("Mahalaxmi");
g.addVertex("LParel");       //Lower Parel=LParel
g.addVertex("Prabhadevi");
g.addVertex("MatungaR");     //Matunga Road=MatungaR 
g.addVertex("Mahim");
g.addVertex("Bandra");
g.addVertex("KharR");           //Khar Road=KharR
g.addVertex("Santacruz");
g.addVertex("VileParle");       //Vile Parle = VileParle
g.addVertex("Andheri");
g.addVertex("Jogeshwari");
g.addVertex("RamMandir");       //Ram Mandir=RamMandir
g.addVertex("Goregaon");
g.addVertex("Malad");
g.addVertex("Kandivali");
g.addVertex("Borivali");
g.addVertex("Dahisar");
g.addVertex("MiraR");           //Mira Road=MiraR
g.addVertex("Bhayandar");
g.addVertex("Naigaon");
g.addVertex("VasaiR");          //Vasai Road = VasaiR
g.addVertex("Virar");

//Metro Rail
g.addVertex("Versova");
g.addVertex("DNNagar");         //D>N Nagar= DNNagar
g.addVertex("AzadN");
g.addVertex("WesternExpressHighway");       //Western Express Highway=WesternExpressHighway

g.addVertex("Chakala");
g.addVertex("AirportR");            //Airport Road=AirportR
g.addVertex("MarolNaka");           //Marol Naka=MarolNaka
g.addVertex("SakiNaka");            //Saki Naka=SakiNaka
g.addVertex("Asalpha");
g.addVertex("JagrutiN");            //Jagruti Nagar=JagrutiN


//Mono Rail
g.addVertex("VNPJunction");         //VNP Junction
g.addVertex("FertilizerTownship");     //Fertilizer Township=FertilizerTownship
g.addVertex("BP");                  //Bharat Petroleum=BP
g.addVertex("MysoreColony");        //Mysore Colony=MysoreColony
g.addVertex("BhaktiPark");          //Bhakti Park=BhaktiPark
g.addVertex("AntopHill");           //Antop Hill=AntopHill
g.addVertex("AcharyaAtreNagar");     //Acharya Atre Nagar=AcharyaAtreNagar
g.addVertex("VadalaBridge");        //Vadala Bridge=VadalaBridge
g.addVertex("AmbedkarN");           //Ambedkar Nagar
g.addVertex("MintColony");          //Mint Colony=MintColony
g.addVertex("SGMChowk");            //Sant Gadge Maharaj Chowk=SGMChowk

//Indian Railway line
g.addVertex("Juchandra");
g.addVertex("KamanR");          //Kaman Raod=KamanR
g.addVertex("Kharbao");
g.addVertex("Bhiwandi");
g.addVertex("Kopar");
g.addVertex("Dativali");
g.addVertex("Nilje");
g.addVertex("Taloja");
g.addVertex("NavadeR");     //Navade Road=NavadeR
g.addVertex("Kalamboli");
g.addVertex("Panvel");

//Central line time
g.addEdge("CSMT", "MB", 3);
g.addEdge("MB", "SandhurstR", 2);
g.addEdge("SandhurstR", "Byculla", 3);
g.addEdge("Byculla", "Chinchpokli", 2);
g.addEdge("Chinchpokli", "CurreyR", 2);
g.addEdge("CurreyR", "Parel", 3);
g.addEdge("Parel", "Dadar", 3);
g.addEdge("Dadar", "Matunga", 3);
g.addEdge("Matunga", "Sion", 4);
g.addEdge("Sion", "Kurla", 4);
g.addEdge("Kurla", "VidyaVihar", 3);
g.addEdge("VidyaVihar", "Ghatkopar", 3);
g.addEdge("Ghatkopar", "Vikhroli", 5);
g.addEdge("Vikhroli", "KanjurMarg", 3);
g.addEdge("KanjurMarg", "Bhandup", 3);
g.addEdge("Bhandup", "Nahur", 3);
g.addEdge("Nahur", "Mulund", 3);
g.addEdge("Mulund", "Thane", 4);
g.addEdge("Thane", "Kalwa", 4);
g.addEdge("Kalwa", "Mumbra", 6);
g.addEdge("Mumbra", "Diva", 4);
g.addEdge("Diva", "Kopar", 5);
g.addEdge("Kopar", "Dombivali", 4);
g.addEdge("Dombivali", "Thakurli", 3);
g.addEdge("Thakurli", "Kalyan", 6);

//western line time
g.addEdge("Churchgate", "ML", 3);
g.addEdge("ML", "CharniR", 2);
g.addEdge("CharniR", "GrantR", 3);
g.addEdge("GrantR", "MC", 3);
g.addEdge("MC", "Mahalaxmi", 2);
g.addEdge("Mahalaxmi", "LParel", 3);
g.addEdge("LParel", "Prabhadevi", 3);
g.addEdge("Prabhadevi", "Dadar", 3);
g.addEdge("Dadar", "MatungaR", 2);
g.addEdge("MatungaR", "Mahim", 2);
g.addEdge("Mahim", "Bandra", 3);
g.addEdge("Bandra", "KharR", 4);
g.addEdge("KharR", "Santacruz", 3);
g.addEdge("Santacruz", "VileParle", 2);
g.addEdge("VileParle", "Andheri", 3);
g.addEdge("Andheri", "Jogeshwari", 5);
g.addEdge("Jogeshwari", "RamMandir", 2);
g.addEdge("RamMandir", "Goregaon", 2);
g.addEdge("Goregaon", "Malad", 2);
g.addEdge("Malad", "Kandivali", 2);
g.addEdge("Kandivali", "Borivali", 3);
g.addEdge("Borivali", "Dahisar", 6);
g.addEdge("Dahisar", "MiraR", 5);
g.addEdge("MiraR", "Bhayandar", 5);
g.addEdge("Bhayandar", "Naigaon", 5);
g.addEdge("Naigaon", "VasaiR", 6);
g.addEdge("VasaiR", "Virar", 11);

//Harbour Line
g.addEdge("SandhurstR", "DockyardR", 2);
g.addEdge("DockyardR", "ReayR", 2);
g.addEdge("ReayR", "CG", 2);
g.addEdge("CG", "Sewri", 3);
g.addEdge("Sewri", "VadalaR", 3);

//Diversion 1
g.addEdge("VadalaR", "KingCircle", 5);
g.addEdge("KingCircle", "Mahim", 2);

//Diversion 2
g.addEdge("VadalaR", "GTBN", 5);
g.addEdge("GTBN", "Chunabhatti", 3);
g.addEdge("Chunabhatti", "Kurla", 3);
g.addEdge("Kurla", "TilakN", 3);
g.addEdge("TilakN", "Chembur", 2);
g.addEdge("Chembur", "Govandi", 3);
g.addEdge("Govandi", "Mankhurd", 3);
g.addEdge("Mankhurd", "Vashi", 8);

//thane vashi time
g.addEdge("Thane", "Airoli", 8);
g.addEdge("Airoli", "Rabale", 3);
g.addEdge("Rabale", "Ghansoli", 3);
g.addEdge("Ghansoli", "KoparKhairane", 3);
g.addEdge("KoparKhairane", "Turbhe", 4);

//Diversion 1
g.addEdge("Turbhe", "Sanpada", 3);
g.addEdge("Sanpada", "Vashi", 3);

//Diversion 2
g.addEdge("Turbhe", "Juinagar", 4);

//from kalyan to khopoli
g.addEdge("Kalyan", "Ulhasnagar", 8);
g.addEdge("Ulhasnagar", "Ambernath", 6);
g.addEdge("Ambernath", "Badlapur", 8);
g.addEdge("Badlapur", "Karjat", 33);
g.addEdge("Karjat", "Khopoli", 25);

//from kalyan to kasara
g.addEdge("Kalyan", "Titwala", 13);
g.addEdge("Titwala", "Asangaon", 24);
g.addEdge("Asangaon", "Atgaon", 9);
g.addEdge("Atgaon", "Khardi", 12);
g.addEdge("Khardi", "Kasara", 18);

//Vasai Panvel line
g.addEdge("VasaiR", "Juchandra", 6);
g.addEdge("Juchandra", "KamanR", 6);
g.addEdge("KamanR", "Kharbao", 7);
g.addEdge("Kharbao", "Bhiwandi", 10);
g.addEdge("Bhiwandi", "Kopar", 20);
g.addEdge("Kopar", "Dativali", 1);
g.addEdge("Dativali", "Nilje", 11);
g.addEdge("Nilje", "Taloja", 9);
g.addEdge("Taloja", "NavadeR", 7);
g.addEdge("NavadeR", "Kalamboli", 3);
g.addEdge("Kalamboli", "Panvel", 16);

//Mono Rail
//Chembur-Sant timeline
g.addEdge("Chembur", "VNPJunction", 2);
g.addEdge("VNPJunction", "FertilizerTownship", 3);
g.addEdge("FertilizerTownship", "BP", 2);
g.addEdge("BP", "MysoreColony", 3);
g.addEdge("MysoreColony", "BhaktiPark", 4);
g.addEdge("BhaktiPark", "VadalaR", 4);
g.addEdge("VadalaR", "GTBN", 2);
g.addEdge("GTBN", "AntopHill", 2);
g.addEdge("AntopHill", "AcharyaAtreNagar", 2);
g.addEdge("AcharyaAtreNagar", "VadalaBridge", 3);
g.addEdge("VadalaBridge", "Dadar", 3);
g.addEdge("Dadar", "Naigaon", 2);
g.addEdge("Naigaon", "AmbedkarN", 4);
g.addEdge("AmbedkarN", "MintColony", 2);
g.addEdge("MintColony", "LParel", 3);
g.addEdge("LParel", "SGMChowk", 3);

//Metro Rail timeline
g.addEdge("Versova", "DNNagar", 2);
g.addEdge("DNNagar", "AzadN", 3);
g.addEdge("AzadN", "Andheri", 4);
g.addEdge("Andheri", "WesternExpressHighway", 3);
g.addEdge("WesternExpressHighway", "Chakala", 2);
g.addEdge("Chakala", "AirportR", 2);
g.addEdge("AirportR", "MarolNaka", 2);
g.addEdge("MarolNaka", "SakiNaka", 2);
g.addEdge("SakiNaka", "Asalpha", 2);
g.addEdge("Asalpha", "JagrutiN", 2);
g.addEdge("JagrutiN", "Ghatkopar", 3);

function Retrieve() {
  src_area = document.forms[0].elements[1].value
  des_area = document.forms[0].elements[3].value
  let route = g.Dijkstra(src_area, des_area)
  localStorage.setItem("ShortestPath", route.comp_path)
  localStorage.setItem("Length", route.time_taken)
}