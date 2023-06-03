import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '../plugins/firebase';

interface User {
    name: string;
    email: string;
    // 他のユーザー情報を追加します
}

const UserProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             // ユーザーがログインしている場合、Firestoreからユーザーデータを取得します
    //             const userRef = db.collection('users').doc(user.uid);
    //             userRef.get().then((doc) => {
    //                 if (doc.exists) {
    //                     setUser(doc.data() as User);
    //                 } else {
    //                     // ユーザードキュメントが存在しない場合は適切に処理します
    //                 }
    //             });
    //         } else {
    //             // ユーザーがログインしていない場合はログインページにリダイレクトします
    //             router.push('/login');
    //         }
    //     });

    //     // アンマウント時にリスナーをクリーンアップします
    //     return () => unsubscribe();
    // }, [router]);

    return (
        <div>
            <h1>ユーザープロファイルページ</h1>
            {user && (
                <div>
                    <p>名前: {user.name}</p>
                    <p>メールアドレス: {user.email}</p>
                    {/* 他のユーザー情報を表示します */}
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
