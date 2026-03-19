const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const register = async (username, email, password) => {
  const { data: existing } = await supabase
    .from('users').select('*').eq('email', email).single();
  if (existing) throw new Error('Email นี้ถูกใช้แล้ว');

  const hashed = await bcrypt.hash(password, 10);
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, email, password: hashed }])
    .select('id, username, email').single();

  if (error) throw new Error(error.message);

  const token = jwt.sign(
    { id: data.id, email: data.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  return { token, user: data };
};

const login = async (email, password) => {
  const { data: user, error } = await supabase
    .from('users').select('*').eq('email', email).single();
  if (error || !user) throw new Error('ไม่พบ email นี้');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Password ไม่ถูกต้อง');

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  return { token, user: { id: user.id, username: user.username, email: user.email } };
};

module.exports = { register, login };