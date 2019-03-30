this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('my cache').then(function(e){
  e.addAll([
    '/index.html',
    '/css/index.css'
  ])
  })
  )
})
// fetch addEventListener
this.addEventListener('install',function(event){
  event.respondWidth(caches.open('my cache')
  .then(function(cache){
      return cache.match(event.request)
      .then(function(result){
        return result || fetch(event.request)
        .then(function(result){
          cache.put(event.request,result.clone());
         return result;
        })
      })
    })
  )
})
