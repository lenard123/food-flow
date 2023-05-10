<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('pages.admin.users', [
            'users' => User::all()
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|unique:users',
            'image' => 'required|image',
            'password' => 'required',
            'role' => 'required'
        ]);

        $user = new User();
        $user->fill($request->only('firstname', 'lastname', 'email', 'role'));
        $user->password = bcrypt($request->password);
        $user->image = $request->file('image')->store('avatar', 'public');
        $user->save();

        return redirect('/admin/users');
    }
}
