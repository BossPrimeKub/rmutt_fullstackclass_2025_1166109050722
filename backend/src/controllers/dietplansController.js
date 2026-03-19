const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const getAll = async (req, res) => {
  const { data, error } = await supabase.from('dietplans').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const getById = async (req, res) => {
  const { data, error } = await supabase.from('dietplans').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

const create = async (req, res) => {
  const { data, error } = await supabase.from('dietplans').insert([req.body]).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

const update = async (req, res) => {
  const { data, error } = await supabase.from('dietplans').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const remove = async (req, res) => {
  const { error } = await supabase.from('dietplans').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };