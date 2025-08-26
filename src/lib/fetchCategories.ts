import { supabase } from "./supabaseClient";

export async function fetchCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from("categorias")
    .select("nome")
    .order("nome", { ascending: true });

  if (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }

  return data?.map((c) => c.nome) || [];
}
