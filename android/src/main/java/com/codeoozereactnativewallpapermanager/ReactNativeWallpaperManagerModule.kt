package com.codeoozereactnativewallpapermanager

import android.app.WallpaperManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.net.URL


class ReactNativeWallpaperManagerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ReactNativeWallpaperManager"
    }

    @ReactMethod
    fun applyWallpaper(uri: String, screen: String = "both", promise: Promise) {

      val bitmap = try {
        val url = URL(uri)
        BitmapFactory.decodeStream(url.openConnection().getInputStream())
      } catch (e: Exception) {
        throw e
      }

      val wallpaperManager = try {
        WallpaperManager.getInstance(reactApplicationContext)
      } catch (e: Exception) {
        throw e
      }

      if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {

        bitmap as Bitmap?
        var message: String = "Wallpaper applied successfully";

        try {
          when(screen) {
            "home" -> {
              wallpaperManager?.setBitmap(bitmap, null, true, WallpaperManager.FLAG_SYSTEM)
              promise.resolve(message)
            }
            "lock" -> {
              wallpaperManager?.setBitmap(bitmap, null, true, WallpaperManager.FLAG_LOCK)
              promise.resolve(message)
            }
            "both" -> {
              wallpaperManager?.setBitmap(bitmap)
              promise.resolve(message)
            }
            else -> {
              wallpaperManager?.setBitmap(bitmap)
              promise.resolve(message)
            }
          }
        }
        catch (e: Exception) {
          throw e
        }

      }

    }

}
