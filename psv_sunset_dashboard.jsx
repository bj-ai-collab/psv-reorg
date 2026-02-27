import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DATA = [
  {name:"Abhinav",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Mohammed M",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Annapoorna",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Araja Ram Trivedh",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ganesh",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Vigneshan",team:"Integration",brand:"Shell",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Veerendra G",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"N"},
  {name:"Sahana MV",team:"Integration",brand:"Indigo",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Adarsh Koushik",team:"Integration",brand:"Indigo",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Sharan",team:"Integration",brand:"Abbott",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Shashank",team:"Integration",brand:"Abbott",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Jeevan Kumar",team:"Integration",brand:"Suntec",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Akash Pramod",team:"Integration",brand:"Aldar",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Sanket",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Himanshu Bisht",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Neha L",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Suraj",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"N"},
  {name:"Harsha",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"N"},
  {name:"Sarthak",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"N"},
  {name:"Santosh",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"N"},
  {name:"Kiran N",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Prince",team:"Integration",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Inchara",team:"Webapp",brand:"Suntech",billed:"Billed",pod:"POD",ai:"Yes",sunset:"September"},
  {name:"Meghana",team:"Webapp",brand:"Abbott",billed:"Billed",pod:"POD",ai:"Yes",sunset:"September"},
  {name:"Akshit",team:"Webapp",brand:"Indigo",billed:"Billed",pod:"POD",ai:"Yes",sunset:"September"},
  {name:"Nagendra",team:"Webapp",brand:"Other",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"Move to EU"},
  {name:"Rutuja",team:"Webapp",brand:"Abbott",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Srujan",team:"Webapp",brand:"Instore/Vulcan",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Aswani",team:"Webapp",brand:"Emailers",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"September"},
  {name:"Viplav",team:"Webapp",brand:"Pre Sales",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"September"},
  {name:"Rakesh",team:"Webapp",brand:"Shell",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"September"},
  {name:"JP",team:"Webapp",brand:"Abbott/C&A",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"September"},
  {name:"Amit Das",team:"QA",brand:"Abbott",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Vinayak Mate",team:"QA",brand:"Shell/Mix",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Dhananjay Jadhav",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Ganesh Sawalkar",team:"QA",brand:"Shell/Mix",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Nishant Swarnkar",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Rajesh M",team:"QA",brand:"Aldar/AFG",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Shweta Singh",team:"QA",brand:"Masan/Indigo/Suntec",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Syed Jawad",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Vikul Kumar",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Divyanshu Parwal",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Harsh Chopra",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"April"},
  {name:"Priti Yadav",team:"QA",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Oshin",team:"QA",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"Kognitiv"},
  {name:"Vinod Kumar",team:"SA",brand:"Shell POD 1",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Somna Iyer",team:"SA",brand:"Shell POD 2",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Deepak PD",team:"SA",brand:"Shell POD 3",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Amal Raj",team:"SA",brand:"Indigo",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Vikas Varma",team:"SA",brand:"Abbott",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ramu B",team:"SA",brand:"Pre-Sales",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Rati C",team:"SA",brand:"AFG",billed:"Billed",pod:"POD",ai:"No",sunset:"September"},
  {name:"Divya",team:"SA",brand:"Aldar",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Shilpa R",team:"SA",brand:"Suntec",billed:"Billed",pod:"POD",ai:"No",sunset:"September"},
  {name:"Vishwas N",team:"SA",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"Kognitiv"},
  {name:"Krish C",team:"SA",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Mallik",team:"SA",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Dheeraj",team:"SA",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Kanav",team:"APP",brand:"Shell",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Gourav",team:"APP",brand:"Shell",billed:"Billed",pod:"POD",ai:"Yes",sunset:"N"},
  {name:"Mohammed Talha",team:"APP",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Sophia",team:"APP",brand:"Shell/Citadel",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Avinash",team:"APP",brand:"Shell/Suntec",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Mayank",team:"APP",brand:"Shell/Citadel",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Mrutyunjaya",team:"APP",brand:"Shell/ADAC",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Divyanshi",team:"APP",brand:"Shell/ADAC",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Rahul Sharma",team:"APP",brand:"Shell/ADAC",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Jaico",team:"APP",brand:"Suntec",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Mahesh",team:"APP",brand:"ADAC",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"September"},
  {name:"Ramnath",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Pankaj",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Franc",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"Move to US"},
  {name:"Swastik",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"AI Team"},
  {name:"Balaji",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Simran",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Ashishh",team:"APP",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"Yes",sunset:"September"},
  {name:"Amardeep",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ulhas",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Mayank C",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Naveen",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ila",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Anurag",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Nidhi",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ruchitha MM",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ruchitha M",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Apoorva MJ",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Malu",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ryan",team:"Config",brand:"Various",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Nishanth",team:"PM",brand:"Indigo",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Ronald",team:"PM",brand:"Shell",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Muthu",team:"PM",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"September"},
  {name:"Ashwin",team:"PM",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Abhishek",team:"PM",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"September"},
  {name:"Rakshith",team:"PM",brand:"Unbilled",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"April"},
  {name:"Debadree",team:"PM",brand:"Various",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Hrithik",team:"PM",brand:"Various",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Pragya",team:"PM",brand:"Various",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"N"},
  {name:"Rima",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Anuja",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Nitish",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Satrupa",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Amogh",team:"PM",brand:"Attrition",billed:"Unbilled",pod:"Not POD",ai:"No",sunset:"Attrition"},
  {name:"Sahana",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
  {name:"Swo",team:"PM",brand:"POD",billed:"Billed",pod:"POD",ai:"No",sunset:"N"},
];

const COLORS = {Billed:"#2080BD",Unbilled:"#DB5226",POD:"#399D49","Not POD":"#F4A114",April:"#DB5226",September:"#F4A114",Remaining:"#399D49",Other:"#8C9BA5"};
const TEAM_COLORS = {Integration:"#2080BD",Webapp:"#23959A",QA:"#DB5226",SA:"#6F459B",APP:"#F4A114",Config:"#399D49",PM:"#8C9BA5"};

const StatCard = ({label, value, sub, color, icon}) => (
  <div style={{background:"#fff",borderRadius:12,padding:"20px 24px",border:"1px solid #e5e7eb",flex:1,minWidth:150,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:0,left:0,width:"100%",height:3,background:color||"#2080BD"}}/>
    <div style={{fontSize:12,color:"#8C9BA5",fontWeight:600,letterSpacing:0.5,textTransform:"uppercase",marginBottom:4}}>{label}</div>
    <div style={{fontSize:32,fontWeight:800,color:color||"#142737",lineHeight:1.1}}>{value}</div>
    {sub && <div style={{fontSize:11,color:"#8C9BA5",marginTop:4}}>{sub}</div>}
  </div>
);

const SunsetTable = ({people, title, color}) => (
  <div style={{marginBottom:16}}>
    <div style={{fontSize:13,fontWeight:700,color:color,marginBottom:6,display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:8,height:8,borderRadius:"50%",background:color}}/>{title} ({people.length})
    </div>
    <div style={{background:"#fff",borderRadius:8,border:"1px solid #e5e7eb",overflow:"hidden"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
        <thead><tr style={{background:"#f8f9fb"}}>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,color:"#142737",borderBottom:"1px solid #e5e7eb"}}>Name</th>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,color:"#142737",borderBottom:"1px solid #e5e7eb"}}>Team</th>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,color:"#142737",borderBottom:"1px solid #e5e7eb"}}>Brand/Project</th>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,color:"#142737",borderBottom:"1px solid #e5e7eb"}}>Billed</th>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,color:"#142737",borderBottom:"1px solid #e5e7eb"}}>Cost $</th>
        </tr></thead>
        <tbody>{people.map((p,i) => (
          <tr key={i} style={{background:i%2===0?"#fff":"#f8f9fb"}}>
            <td style={{padding:"7px 12px",color:"#142737",fontWeight:500,borderBottom:"1px solid #f0f0f0"}}>{p.name}</td>
            <td style={{padding:"7px 12px",borderBottom:"1px solid #f0f0f0"}}><span style={{background:TEAM_COLORS[p.team]+"20",color:TEAM_COLORS[p.team],padding:"2px 8px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.team}</span></td>
            <td style={{padding:"7px 12px",color:"#58595B",borderBottom:"1px solid #f0f0f0"}}>{p.brand}</td>
            <td style={{padding:"7px 12px",borderBottom:"1px solid #f0f0f0"}}><span style={{background:p.billed==="Billed"?"#dcfce7":"#fee2e2",color:p.billed==="Billed"?"#166534":"#991b1b",padding:"2px 8px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.billed}</span></td>
            <td style={{padding:"7px 12px",color:"#8C9BA5",borderBottom:"1px solid #f0f0f0"}}>—</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  </div>
);

const CustomTooltip = ({active, payload}) => {
  if (!active || !payload?.length) return null;
  return <div style={{background:"#142737",color:"#fff",padding:"8px 12px",borderRadius:6,fontSize:12}}>{payload[0].name}: <b>{payload[0].value}</b></div>;
};

export default function Dashboard() {
  const [tab, setTab] = useState("overview");
  const [teamFilter, setTeamFilter] = useState("All");

  const filtered = useMemo(() => teamFilter === "All" ? DATA : DATA.filter(d => d.team === teamFilter), [teamFilter]);
  const teams = ["All", ...new Set(DATA.map(d => d.team))];

  const total = filtered.length;
  const billed = filtered.filter(d => d.billed === "Billed").length;
  const unbilled = filtered.filter(d => d.billed === "Unbilled").length;
  const podCount = filtered.filter(d => d.pod === "POD").length;
  const notPod = filtered.filter(d => d.pod === "Not POD").length;

  const aprilSunset = filtered.filter(d => d.sunset === "April");
  const septSunset = filtered.filter(d => d.sunset === "September");
  const otherExit = filtered.filter(d => !["N","April","September"].includes(d.sunset));
  const totalSunset = aprilSunset.length + septSunset.length + otherExit.length;
  const remaining = total - totalSunset;

  const unbilledRemaining = filtered.filter(d => d.billed === "Unbilled" && d.sunset === "N");
  const afterApril = total - aprilSunset.length;
  const afterSept = afterApril - septSunset.length - otherExit.length;

  const billedPie = [{name:"Billed (POD)",value:billed},{name:"Unbilled (Not POD)",value:unbilled}];
  const sunsetTimeline = [{name:"Current",Total:total,Billed:billed,Unbilled:unbilled},{name:"After April",Total:afterApril,Billed:billed-aprilSunset.filter(d=>d.billed==="Billed").length,Unbilled:unbilled-aprilSunset.filter(d=>d.billed==="Unbilled").length},{name:"After Sept",Total:afterSept,Billed:billed-aprilSunset.filter(d=>d.billed==="Billed").length-septSunset.filter(d=>d.billed==="Billed").length-otherExit.filter(d=>d.billed==="Billed").length,Unbilled:unbilled-aprilSunset.filter(d=>d.billed==="Unbilled").length-septSunset.filter(d=>d.billed==="Unbilled").length-otherExit.filter(d=>d.billed==="Unbilled").length}];
  const teamBreakdown = teams.filter(t=>t!=="All").map(t => {const f=DATA.filter(d=>d.team===t);return{name:t,Total:f.length,POD:f.filter(d=>d.pod==="POD").length,"Not POD":f.filter(d=>d.pod==="Not POD").length,Sunset:f.filter(d=>d.sunset!=="N").length}});
  const sunsetByTeam = teams.filter(t=>t!=="All").map(t => {const f=DATA.filter(d=>d.team===t);return{name:t,April:f.filter(d=>d.sunset==="April").length,September:f.filter(d=>d.sunset==="September").length,Other:f.filter(d=>!["N","April","September"].includes(d.sunset)).length}});

  return (
    <div style={{fontFamily:"'Inter','Segoe UI',system-ui,sans-serif",background:"#f0f2f5",minHeight:"100vh",padding:0}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#142737 0%,#1C3345 100%)",padding:"20px 32px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:10,color:"#2080BD",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:4}}>PSV CONFIDENTIAL</div>
          <div style={{fontSize:22,fontWeight:800,color:"#fff"}}>Sunset & Workforce Transition Plan</div>
          <div style={{fontSize:12,color:"#8C9BA5",marginTop:2}}>AI-First Org Transformation — April & September 2025</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:28,fontWeight:800,color:"#2080BD"}}>{total}</div>
          <div style={{fontSize:10,color:"#8C9BA5"}}>Total Headcount</div>
        </div>
      </div>

      {/* Nav */}
      <div style={{background:"#fff",borderBottom:"1px solid #e5e7eb",padding:"0 32px",display:"flex",gap:0}}>
        {[["overview","Overview"],["april","April Sunset"],["september","Sept Sunset"],["remaining","Remaining Team"],["roster","Full Roster"]].map(([k,l])=>(
          <button key={k} onClick={()=>setTab(k)} style={{padding:"12px 20px",fontSize:12,fontWeight:tab===k?700:500,color:tab===k?"#2080BD":"#58595B",background:"none",border:"none",borderBottom:tab===k?"2px solid #2080BD":"2px solid transparent",cursor:"pointer"}}>{l}</button>
        ))}
        <div style={{marginLeft:"auto",padding:"8px 0",display:"flex",gap:6,alignItems:"center"}}>
          <span style={{fontSize:11,color:"#8C9BA5"}}>Team:</span>
          <select value={teamFilter} onChange={e=>setTeamFilter(e.target.value)} style={{padding:"4px 8px",borderRadius:6,border:"1px solid #e5e7eb",fontSize:11,color:"#142737"}}>
            {teams.map(t=><option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div style={{padding:"20px 32px"}}>
        {/* OVERVIEW TAB */}
        {tab === "overview" && <>
          <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
            <StatCard label="Total Headcount" value={total} sub="Current PSV strength" color="#142737"/>
            <StatCard label="Billed / POD" value={billed} sub={`${Math.round(billed/total*100)}% of total`} color="#399D49"/>
            <StatCard label="Unbilled / Not POD" value={unbilled} sub={`${Math.round(unbilled/total*100)}% of total`} color="#DB5226"/>
            <StatCard label="Sunset April" value={aprilSunset.length} sub="Phase 1 exits" color="#DB5226"/>
            <StatCard label="Sunset Sept" value={septSunset.length} sub="Phase 2 exits" color="#F4A114"/>
            <StatCard label="Other Moves" value={otherExit.length} sub="Kognitiv, EU, US, AI" color="#8C9BA5"/>
            <StatCard label="Remaining" value={remaining} sub="Post-transformation" color="#2080BD"/>
          </div>

          <div style={{display:"flex",gap:16,marginBottom:20,flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:300,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e5e7eb"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#142737",marginBottom:12}}>Billed vs Unbilled</div>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart><Pie data={billedPie} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" label={({name,value})=>`${name}: ${value}`} labelLine={false}>
                  {billedPie.map((e,i)=><Cell key={i} fill={i===0?"#399D49":"#DB5226"}/>)}
                </Pie><Tooltip content={<CustomTooltip/>}/></PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{flex:2,minWidth:400,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e5e7eb"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#142737",marginBottom:12}}>Headcount Trajectory: Current → After April → After Sept</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={sunsetTimeline}><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="name" fontSize={11}/><YAxis fontSize={11}/><Tooltip content={<CustomTooltip/>}/>
                  <Bar dataKey="Billed" stackId="a" fill="#399D49" radius={[0,0,0,0]}/>
                  <Bar dataKey="Unbilled" stackId="a" fill="#DB5226" radius={[4,4,0,0]}/>
                  <Legend wrapperStyle={{fontSize:11}}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:400,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e5e7eb"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#142737",marginBottom:12}}>Team Breakdown: POD vs Not POD</div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={teamBreakdown} layout="vertical"><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" fontSize={11}/><YAxis dataKey="name" type="category" fontSize={11} width={80}/><Tooltip content={<CustomTooltip/>}/>
                  <Bar dataKey="POD" stackId="a" fill="#399D49"/>
                  <Bar dataKey="Not POD" stackId="a" fill="#F4A114"/>
                  <Legend wrapperStyle={{fontSize:11}}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{flex:1,minWidth:400,background:"#fff",borderRadius:12,padding:20,border:"1px solid #e5e7eb"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#142737",marginBottom:12}}>Sunset by Team & Phase</div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={sunsetByTeam} layout="vertical"><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" fontSize={11}/><YAxis dataKey="name" type="category" fontSize={11} width={80}/><Tooltip content={<CustomTooltip/>}/>
                  <Bar dataKey="April" stackId="a" fill="#DB5226"/>
                  <Bar dataKey="September" stackId="a" fill="#F4A114"/>
                  <Bar dataKey="Other" stackId="a" fill="#8C9BA5"/>
                  <Legend wrapperStyle={{fontSize:11}}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Unbilled remaining callout */}
          <div style={{marginTop:20,background:"#fff3cd",border:"1px solid #ffc107",borderRadius:12,padding:"16px 24px"}}>
            <div style={{fontSize:14,fontWeight:700,color:"#856404",marginBottom:6}}>⚠ Unbilled / Not POD — Remaining After Sunset</div>
            <div style={{fontSize:13,color:"#856404"}}><b>{unbilledRemaining.length} people</b> will remain unbilled and outside of POD after all sunset phases: {unbilledRemaining.map(p=>p.name).join(", ")}</div>
          </div>
        </>}

        {/* APRIL TAB */}
        {tab === "april" && <>
          <div style={{display:"flex",gap:12,marginBottom:16}}>
            <StatCard label="April Sunset" value={aprilSunset.length} sub="Phase 1 — Immediate action" color="#DB5226"/>
            <StatCard label="Billed in April" value={aprilSunset.filter(d=>d.billed==="Billed").length} color="#399D49"/>
            <StatCard label="Unbilled in April" value={aprilSunset.filter(d=>d.billed==="Unbilled").length} color="#F4A114"/>
            <StatCard label="Headcount After" value={afterApril} sub={`Down from ${total}`} color="#2080BD"/>
          </div>
          <SunsetTable people={aprilSunset} title="April 2025 — Sunset List" color="#DB5226"/>
        </>}

        {/* SEPTEMBER TAB */}
        {tab === "september" && <>
          <div style={{display:"flex",gap:12,marginBottom:16}}>
            <StatCard label="September Sunset" value={septSunset.length} sub="Phase 2" color="#F4A114"/>
            <StatCard label="Other Moves" value={otherExit.length} sub="Kognitiv, EU, US, AI Team" color="#8C9BA5"/>
            <StatCard label="Headcount After" value={afterSept} sub={`Down from ${afterApril} (post-April)`} color="#2080BD"/>
          </div>
          <SunsetTable people={septSunset} title="September 2025 — Sunset List" color="#F4A114"/>
          {otherExit.length > 0 && <SunsetTable people={otherExit} title="Other Transitions (Kognitiv, EU, US, AI Team)" color="#8C9BA5"/>}
        </>}

        {/* REMAINING TAB */}
        {tab === "remaining" && <>
          {(() => {
            const rem = filtered.filter(d => d.sunset === "N");
            const remBilled = rem.filter(d => d.billed === "Billed");
            const remUnbilled = rem.filter(d => d.billed === "Unbilled");
            return <>
              <div style={{display:"flex",gap:12,marginBottom:16}}>
                <StatCard label="Remaining Team" value={rem.length} sub="Post all sunsets" color="#2080BD"/>
                <StatCard label="Billed / POD" value={remBilled.length} sub={`${Math.round(remBilled.length/rem.length*100)}%`} color="#399D49"/>
                <StatCard label="Unbilled / Not POD" value={remUnbilled.length} sub="Need attention" color="#DB5226"/>
              </div>
              <SunsetTable people={remBilled} title="Remaining — Billed / POD Members" color="#399D49"/>
              <SunsetTable people={remUnbilled} title="Remaining — Unbilled / Not POD (Need Allocation)" color="#DB5226"/>
            </>;
          })()}
        </>}

        {/* FULL ROSTER */}
        {tab === "roster" && <>
          <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e7eb",overflow:"hidden"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr style={{background:"#142737"}}>
                {["Name","Team","Brand/Project","Billed","POD","AI Ready","Sunset","Cost $"].map(h=>(
                  <th key={h} style={{padding:"10px 12px",textAlign:"left",fontWeight:600,color:"#fff",fontSize:10,letterSpacing:0.5}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>{filtered.map((p,i) => (
                <tr key={i} style={{background:i%2===0?"#fff":"#f8f9fb",borderBottom:"1px solid #f0f0f0"}}>
                  <td style={{padding:"7px 12px",fontWeight:500,color:"#142737"}}>{p.name}</td>
                  <td style={{padding:"7px 12px"}}><span style={{background:TEAM_COLORS[p.team]+"20",color:TEAM_COLORS[p.team],padding:"2px 8px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.team}</span></td>
                  <td style={{padding:"7px 12px",color:"#58595B"}}>{p.brand}</td>
                  <td style={{padding:"7px 12px"}}><span style={{background:p.billed==="Billed"?"#dcfce7":"#fee2e2",color:p.billed==="Billed"?"#166534":"#991b1b",padding:"2px 6px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.billed}</span></td>
                  <td style={{padding:"7px 12px"}}><span style={{background:p.pod==="POD"?"#dcfce7":"#fef3c7",color:p.pod==="POD"?"#166534":"#92400e",padding:"2px 6px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.pod}</span></td>
                  <td style={{padding:"7px 12px",color:p.ai==="Yes"?"#399D49":"#8C9BA5",fontWeight:p.ai==="Yes"?600:400}}>{p.ai}</td>
                  <td style={{padding:"7px 12px"}}>{p.sunset==="N"?<span style={{color:"#8C9BA5"}}>—</span>:<span style={{background:p.sunset==="April"?"#fee2e2":p.sunset==="September"?"#fef3c7":"#e5e7eb",color:p.sunset==="April"?"#991b1b":p.sunset==="September"?"#92400e":"#58595B",padding:"2px 8px",borderRadius:10,fontSize:10,fontWeight:600}}>{p.sunset}</span>}</td>
                  <td style={{padding:"7px 12px",color:"#8C9BA5"}}>—</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </>}
      </div>

      <div style={{padding:"12px 32px",textAlign:"center",fontSize:10,color:"#8C9BA5",borderTop:"1px solid #e5e7eb",background:"#fff"}}>
        PSV Confidential — AI-First Transformation Plan — {new Date().toLocaleDateString()} — For LT Review Only
      </div>
    </div>
  );
}
