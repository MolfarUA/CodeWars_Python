function earth_movers_distance(x, px, y, py)
{
  let d = [];
 for(let i=0; i < x.length; i++)
   d.push( { x : x[i], p : px[i] } );
 for(let i=0; i < y.length; i++)
   d.push( { x : y[i], p : -py[i] } );
        
 d.sort( (a,b) => a.x - b.x );
   
 var f = 0, sum = 0, last = 0;
 for( a of d )
 {
   sum += Math.abs(f) * (a.x - last);
   f += a.p;
   last = a.x;
 }
        
 return sum;
}
var x = [],
    px = [],
    y = [],
    py = [];

x = [1, 2, 8, 9];
//[]
px = [0.375, 0.125, 0.125, 0.375];
y = [2, 4, 6, 8];
py = [0.25, 0.25, 0.25, 0.25];
console.log(earth_movers_distance(x, px, y, py)); //1.75, "");

x = [1, 2, 3, 5];
px = [0.125, 0.375, 0.25, 0.25];
y = [4, 2, 3, 5];
py = [0.5, 0.125, 0.125, 0.25];
console.log(earth_movers_distance(x, px, y, py)); // 1.0, "");

x = [0, 0.5];
px = [0.5, 0.5];
y = [1, 0.5];
py = [0.5, 0.5];
console.log(earth_movers_distance(x, px, y, py)); // 0.5, "");
_________________________________________________
function earth_movers_distance(x, px, y, py)
{
 var d = [];
 for(let i=0; i != x.length; i++)
   d.push( { x : x[i], p : px[i] } );
 for(let i=0; i != y.length; i++)
   d.push( { x : y[i], p : -py[i] } );
        
 d.sort( (a,b) => a.x - b.x );
   
 var f = 0, sum = 0, last = 0;
 for( a of d )
 {
   sum += Math.abs(f) * (a.x - last);
   f += a.p;
   last = a.x;
 }
        
 return sum;
}
_________________________________________________
earth_movers_distance=(x,p,y,q,w=0)=>(x.map((v,i)=>[v,p[i]]).concat(y.map((v,i)=>[v,-q[i]])).sort(([a],[b])=>a-b).reduce((a,b)=>(w+=Math.abs(a[1])*(b[0]-a[0]),[b[0],a[1]+b[1]])),w)
