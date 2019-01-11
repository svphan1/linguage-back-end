exports.seed = function(knex, Promise) {
  return knex
    .raw("DELETE FROM language; ALTER SEQUENCE language_id_seq RESTART WITH 12")
    .then(function () {
      return knex("language").insert([
        {id: 1, 
         language: "English"
        },
        {id: 2, 
         language: "Spanish"
        },
        {id: 3, 
         language: "French"
        },
        {id: 4, 
         language: "Vietnamese"
        },
        {id: 5, 
         language: "German"
        },
        {id: 6, 
         language: "Italian"
        },
        {id: 7, 
         language: "Mandarin"
        },
        {id: 8, 
         language: "Cantonese"
        },
        {id: 9, 
         language: "Japanese"
        },
        {id: 10, 
         language: "Russian"
        },
        {id: 11, 
         language: "Thai"
        },
      ]);
    });
};
