# Taller 4: Talleres Api 
Autor: Mariana Guerrero Benavides

# Estructura del Proyecto
```
src/
├── router/
│   └── taller1.router.js
│   └── taller2.router.js
│   └── taller3.router.js                 
├── talleres/
│   └── taller1.js            
│   ├── taller-02.js        
│   ├── taller-03.js          
└── servidor.js              
```

# Clone repository
> https://github.com/MarianaGb12/talleres-dllo-backend.git

# Enter to folder project
> cd talleres-dllo-backend

> cd src

# Install dependencies
> npm install

#Ejecutar el servidor
> npm run dev

## Endpoints Disponibles

### Taller 1
- `POST /api/taller1/convertidorTemp` - Ej body {"celsius": 25}
- `POST /api/taller1/resolvedor` - Ej body { "a": 1, "b": -3, "c": 2, "signo": "+" }
- `POST /api/talle1/mejorParidad` - Ej body { "n": 15 }
- `POST /api/talle1/peorParidad` - Ej body { "n": 15 }
  
### Taller 2
- `POST /api/taller2/findMax` - Ej body { "list": [1, 5, 3, 9, 2] }
-  `POST /api/taller2/includes` - Ej body { "list": [1, 5, 3, 9, 2], num": 3}
- `POST /api/taller2/sum` - Ej body { "list": [1, 2, 3, 4] }
- `POST /api/taller2/missingNumbers` - Ej body { "list": [1, 2, 4, 6] }
- 
### Taller 3
- `POST /api/taller3/desglosarString` - Ej body { "string" : "murcielagos", "tipo": "vocales" }
-  `POST /api/taller3/twoSum` -  Ej body { "listNums" : [2, 7, 11, 15], "num" : 9 } 
- `POST /api/taller3/conversionRomana` -  Ej body { "cifraRomana" : "III" }
- `POST /api/taller3/descomposicion` -  Ej body { "string" : "malhumor,al,hum,humor,m,mal,malhu"}
