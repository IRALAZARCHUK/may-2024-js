/*-взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.-*/
// let list = document.getElementById('list')
//
// fetch('https://dummyjson.com/carts')
//     .then( value => value.json())
//     .then( cartsObject => {
//         let {carts} = cartsObject
//         console.log(carts)
//         for (const cart of carts) {
//             const div =document.createElement('div')
//             div.classList.add('container')
//             const divInfo =document.createElement('div')
//             divInfo.innerText =`
//                 "total": ${cart.total}
//                 "discountedTotal": ${cart.discountedTotal}
//                 "userId": ${cart.userId}
//                 "totalProducts": ${cart.totalProducts}
//                 "totalQuantity": ${cart.totalQuantity}`
//            const ul= document.createElement('ul')
//             for (const product of cart.products) {
//                 const li = document.createElement('li')
//                 ul.appendChild(li)
//                 li.innerText =`
//                 "id": ${product.id}
//                 "title": ${product.title}
//                 "price": ${product.price}
//                 "quantity": ${product.quantity}
//                 "total": ${product.total}
//                  "discountPercentage": ${product.discountPercentage}
//                  "discountedTotal": ${product.discountedTotal}
//                 `
//                const img = document.createElement('img')
//                 img.src=`${product.thumbnail}`
//                 li.appendChild(img)
//
//             }
//
//             div.append(divInfo,ul)
//             list.append(div)
//         }
//
//     })
/*-взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.-*/

// let recipesBox=document.getElementById('recipes-box')
// fetch('https://dummyjson.com/recipes')
//     .then(value => value.json())
//     .then(recipesObject => {
//         const{recipes} = recipesObject
//         console.log(recipes)
//         for (const recipe of recipes) {
//             const div = document.createElement('div')
//             div.classList.add('div-container')
//             const recipesInfo =document.createElement('div')
//             recipesInfo.innerText =`
//         "id": ${recipe.id},
//         "name": ${recipe.name},
//         "instructions": ${recipe.instructions},
//         "prepTimeMinutes": ${recipe.prepTimeMinutes},
//       "cookTimeMinutes": ${recipe.cookTimeMinutes},
//       "servings": ${recipe.servings},
//       "difficulty": ${recipe.difficulty},
//       "cuisine": ${recipe.cuisine},
//       "caloriesPerServing": ${recipe.caloriesPerServing},
//       "tags": ${recipe.tags},
//       "userId": ${recipe.userId},
//       "rating": ${recipe.rating},
//       "reviewCount": ${recipe.reviewCount},
//       "mealType": ${recipe.mealType},
//        `
//             const img =document.createElement('img')
//             img.src = `${recipe.image}`
//             const ul = document.createElement('ul')
//             ul.innerHTML = '<strong>Ingredients:</strong>';
//             for (const ingredient of recipe.ingredients) {
//                 const li = document.createElement('li')
//                 li.append(div)
//                 ul.appendChild(li)
//                 li.innerText =`${ingredient}`
//
//             }
//             div.append(recipesInfo, ul, img)
//             recipesBox.append(div)
//         }
//     })