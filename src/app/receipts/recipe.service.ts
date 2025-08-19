import {inject, Injectable} from "@angular/core";

let recipes: Recipe[] = [{
  id: "1",
  title: 'Pasta mit Polpette',
  ingredients: ['200 g Rinderhackfleisch', '1 Ei', 'Zwiebel', 'Salz und Pfeffer', '100g Parmesan', '200g Penne', '400g Tomaten'],
  preparation: 'Rinderhack, Ei(er), Petersilie, Basilikum, Salz und Pfeffer in eine große Schüssel geben. ' +
    'Wer es gern pikant mag, darf gern auch noch etwas frisch gehackte Chilischote hinzufügen. ' +
    'Alles zusammen mindestens 10 Minuten sorgfältig zu einer homogenen Masse verkneten. ' +
    'Daraus mit angefeuchteten Händen kleine Bällchen rollen, die möglichst nicht größer als 1,5 cm im Durchmesser und etwa ' +
    'gleich groß sein sollten. Olivenöl in einer großen Pfanne anschwitzen und Fleischbällchen scharf anbraten. ' +
    'Dann mit Tomatensoße abschrecken und noch etwas Wasser hinzufügen. Die Soße sollte eher wässrig sein, da die Penne viel Wasser brauchen werden. Die Soße nach Belieben würzen. Zum Schluss die Paste hinzugeben ' +
    'und in der Pfanne kochen lassen bis sie weich sind. Immer wieder schauen, ob die Nudeln noch etwas Wasser brauchen. Fertig. ',
  favourite: false,
  comments: ['comment 1', 'comment 2'],
}, {
  id: "2",
  title: 'Fetalone Sommersalat',
  ingredients: ['Wassermelone', '1 Pck. Feta', 'Pfeffer'],
  preparation: 'Man schneidet die Melone in große Würfel, ebenso den Feta-Käse und mischt alles zusammen. Darüber etwas Pfeffer streuen.',
  favourite: false,
  comments: [],
}, {
  id: "3",
  title: 'Omelette mit Pilzen und Schinkenspeck',
  ingredients: ['1 Zwiebel', '250g Schinkenspeck', '8 Eier', 'Salz, Pfeer und Muskat', '500g Champignons', '200g Milch'],
  preparation: 'Zuerst die Champignons waschen und in kleine Stückchen schneiden, sie dienen als Füllung für das Omelette. Danach die Zwiebel fein würfeln. Den Schinkenspeck in einer Pfanne kross braten und dann die Zwiebeln und die Champignons dazugeben. Etwas Wasser dazugeben und mit einem Deckel schmoren lassen, bis die Pilze weich sind, dann von der Herdplatte nehmen.' +
    'Die Eier in einer Schüssel aufschlagen und mit Salz und Pfeffer würzen. Wer mag, kann noch eine Prise Muskat dazugeben. Die Milch dazugeben und vermengen. Eine Bratpfanne erhitzen und am einfachsten zwei Suppenkellen der Eimasse in die Pfanne geben und stocken lassen. Wenn die Eimasse fest ist, eine Hälfte mit der Pilzmasse belegen und zusammenklappen. Dann das Omelette vorsichtig mit zwei Bratenwendern aus der Bratpfanne nehmen, in eine feuerfeste Form legen und bei 200 Grad in den Backofen geben.' +
    'Weitere Omelettes backen, bis die komplette Eimasse verbraucht ist.',
  favourite: false,
  comments: [],
}, {
  id: "4",
  title: 'Blumenkohl-Süßkartoffel-Auflauf',
  ingredients: ['250 Blumenkohlröschen', '250g Süßkartoffeln', '150g Kartoffeln', '1 El Butter', '1 EL Mehl', '150g Gemüsebrühe', 'Salz und Pfeffer', '0.5 Becher Sahne', '80g geriebener Käse'],
  preparation: 'Die Blumenkohlröschen in etwas Salzwasser blanchieren. Über einem Sieb abschütten und beiseitestellen. Die Süßkartoffeln und Kartoffeln schälen, in etwas dickere Scheiben schneiden und in Salzwasser knapp bissfest kochen. Das Wasser abgießen und die Kartoffeln beiseitestellen. ' +
    'In einem Topf die Butter zerlassen, 1 EL Mehl hinzufügen und unter ständigem Rühren mit soviel Gemüsebrühe auffüllen, bis die gewünschte Konsistenz erreicht ist. Den scharfen Meerrettich hinzufügen. Dann mit Salz, Muskat und Zitronenpfeffer abschmecken und zum Schluss mit der Sahne abrunden. ' +
    'Eine passende Auflaufform einfetten und als untere Schicht die gemischten Kartoffel- und Süßkartoffelscheiben schichtartig einlegen. Etwas salzen und pfeffern. Nun die blanchierten Blumenkohlröschen darauf verteilen und wieder eine Schicht gemischte Kartoffelscheiben darauf legen. Etwas salzen und pfeffern. Ganz zum Schluss alles mit der Meerrettichsoße übergießen und den geriebenen Käse darüber streuen.' +
    ' \n' +
    'Im vorgeheizten Backofen bei 180 °C Umluft in ca. 30 Minuten goldbraun backen.',
  favourite: false,
  comments: [],
}]

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  getAllRecipes() {
    return recipes;
  }

  getRecipeById(id: string) {
    return recipes.filter(recipe => recipe.id === id)[0];
  }

  createNewRecipe(recipe: Recipe) {
    recipes.push(recipe);
  }

  updateRecipe(id: string, newRecipe: Recipe | undefined) {
    const selectedRecipeIndex: number = recipes.findIndex(recipe => recipe.id === id);
  }

  deleteRecipe(id: string) {
    const selectedRecipeIndex: number = recipes.findIndex(recipe => recipe.id === id);
    recipes.splice(selectedRecipeIndex, 1);
  }

  updateFavouriteState(id: string) {
    //const favouriteRecipe= this.getRecipeById(id);
    //favouriteRecipe?.favourite == true ? favouriteRecipe.favourite = false : true;
   recipes.filter(recipe => recipe.id !== id)[0].favourite == true ? false : true;
    console.log("favourite: ", id, "state: ", recipes.filter(recipe => recipe.id !== id)[0].favourite);
  }
}
