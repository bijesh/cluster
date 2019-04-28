const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster)
{
    const cpuCount = os.cpus().length;
    console.log(`CPU count ${cpuCount}`);
    for(var i=0;i<cpuCount;i++)
    {
        cluster.fork();
    }
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`Worker has died :${worker.process.pid}`);
        if(!worker.exitedAfterDisconnect){
            cluster.fork();
        }
    });
}
else
{
    require('./server');
}