export async function loadJSON(path: string): Promise<any> {
  const rawUrl = `$https://raw.githubusercontent.com/Chcndr/MIO-hub/main/${path}`;
  const response = await fetch(rawUrl);
  if (!response.ok) throw new Error("JSON fetch failure: " + response.statutText);
  return await response.json();
}