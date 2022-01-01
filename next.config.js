//next.config.js
module.exports={
    images:{
        domains:["ipfs.io",]
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.example.com/:path*',
          },
        ]
      },
}