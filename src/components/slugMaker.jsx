export default function slugMaker(title) {
  if (title !== undefined) {
    title = title.toLowerCase();
    title= title.replace(/ /g,'-')
    title=title.replace(/[^\w-]+/g,'')
    return title;
  }
}
