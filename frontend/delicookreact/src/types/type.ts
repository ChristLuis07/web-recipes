export interface Recipe {
    id: number,
    name: string,
    slug: string,
    url_file: string,
    url_video: string,
    author: Author,
    category: Category,
    thumbnail:string,
    photos: Photo[],
    tutorials: Tutorial[],
    recipe_ingredients: RecipeIngredient[],
    about: string,
    rating: number,
    reviews: Review[],
    
}

interface Photo {
    id:number,
    photo:string,
}

interface Tutorial {
    id:number,
    name:string,
}

interface Author {
    id: number,
    name: string,
    photo: string,
}

interface RecipeIngredient {
    id: number,
    ingredient: Ingredient,
}

interface Ingredient {
    id: number,
    name: string,
    photo: string,
}

export interface Category {
    id: number,
    name: string,
    slug: string,
    icon: string,
    recipes_count: number,
    recipes: Recipe[],
}

export interface Review {
    id: number,
    comment: string,
    rating: number,
    author: Author,
    created_at: string,
}